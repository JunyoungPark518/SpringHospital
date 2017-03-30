package com.hospital.web.domain;

import java.util.Map;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Lazy;

interface Orderable {
	public Command process(Map<?, ?> map);
}

@Lazy @Qualifier("command")
public class Command implements Orderable {
	Map<?, ?> map;
	public Command(Map<?, ?> map) {
		this.map = map;
	}
	
	public int[] getPageInfo() {
		Pagination page = new Pagination();
		String pageNO = (String) map.get("pageNO");
		String count = (String) map.get("count");
		page.setBlockSize(5);
		page.setRowCount(5);
		page.setCount(Integer.parseInt(count));
		page.setPageNo(pageNO);
		page.setPageStart();
		page.setPageEnd();	
		page.setPageCount();
		page.setBlockStart();
		page.setPrevBlock();
		page.setNextBlock();
		page.setBlockEnd();
		return page.getAttr();
	}
	
	public Person<? extends Info> getPersonInfo() {
		Person<?> person = null;
		switch (map.get("type").toString()) {
		case "patient":
			person = new Person<Info>(new Patient());
			Patient newpat = (Patient) person.getInfo();
			newpat.setId(map.get("id").toString());
			newpat.setNurID(map.get("nurID").toString());
			newpat.setDocID(map.get("docID").toString());
			newpat.setPass(map.get("pass").toString());
			newpat.setName(map.get("name").toString());
			newpat.setGen(map.get("gen").toString());
			newpat.setJumin(map.get("jumin").toString());
			newpat.setAddr(map.get("addr").toString());
			newpat.setPhone(map.get("phone").toString());
			newpat.setEmail(map.get("email").toString());
			newpat.setJob(map.get("job").toString());
			break;
		case "doctor":
			person = new Person<Info>(new Doctor());
			Doctor newdoc = (Doctor) person.getInfo();
			newdoc.setId(map.get("id").toString());
			newdoc.setPass(map.get("pass").toString());
			newdoc.setMajor(map.get("major").toString());
			newdoc.setName(map.get("name").toString());
			newdoc.setGen(map.get("gen").toString());
			newdoc.setPhone(map.get("phone").toString());
			newdoc.setEmail(map.get("email").toString());
			newdoc.setPosition(map.get("position").toString());
			break;
		case "nurse":
			person = new Person<Info>(new Nurse());
			break;
		case "admin":
			person = new Person<Info>(new Admin());
			break;
		default:
			break;
		}
		return person;
	}
	
	@Override
	public Command process(Map<?, ?> map) {
		return new Command(map);
	}
	
	class Pagination {
		private int pageNO, rowCount, blockSize, pageStart, pageEnd, pageCount, blockStart, prevBlock, nextBlock,
				blockEnd, count;

		public int[] getAttr() {
			int[] arr = { count, pageCount, pageNO, pageStart, pageEnd, blockStart, blockEnd, prevBlock, nextBlock };
			return arr;
		}

		public void setPageNo(String strPageNo) {
			this.pageNO = Integer.parseInt(strPageNo);
		}

		public void setRowCount(int rowCount) {
			this.rowCount = rowCount;
		}

		public void setBlockSize(int blockSize) {
			this.blockSize = blockSize;
		}

		public void setPageStart() {
			this.pageStart = (pageNO - 1) * rowCount + 1;
		}

		public void setPageEnd() {
			this.pageEnd = pageNO * rowCount;
		}

		public void setPageCount() {
			this.pageCount = (count % rowCount == 0) ? count / rowCount : count / rowCount + 1;
		}

		public void setBlockStart() {
			this.blockStart = pageNO - ((pageNO - 1) % blockSize);
		}

		public void setPrevBlock() {
			this.prevBlock = blockStart - blockSize;
		}

		public void setNextBlock() {
			this.nextBlock = blockStart + blockSize;
		}

		public void setBlockEnd() {
			this.blockEnd = (blockStart + rowCount - 1 < pageCount) ? blockStart + blockSize - 1 : pageCount;
		}

		public void setCount(int count) {
			this.count = count;
		}
	}
}
