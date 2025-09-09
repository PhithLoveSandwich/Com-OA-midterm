```markdown
# Node React Test

โปรเจกต์นี้เป็นตัวอย่าง Fullstack Application ที่ประกอบไปด้วย **Frontend (React)** และ **Backend (Express.js)**

## โครงสร้างโปรเจกต์

```

node-react-test/
│── backend/        # ส่วน Backend (Express.js)
│   ├── server.js   # จุดเริ่มต้นของ Backend
│   ├── package.json
│   └── node\_modules/
│
│── frontend/       # ส่วน Frontend (React)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── node\_modules/
│
├── .env            # Environment variables (ไม่ควร push ขึ้น Git)
├── .gitignore
├── package.json
└── README.md

````

---

## การติดตั้ง

1. Clone โปรเจกต์:
   ```bash
   git clone https://github.com/your-username/node-react-test.git
   cd node-react-test
````

2. ติดตั้ง dependencies สำหรับ **backend**:

   ```bash
   cd backend
   npm install
   ```

3. ติดตั้ง dependencies สำหรับ **frontend**:

   ```bash
   cd ../frontend
   npm install
   ```

---

## การรันโปรเจกต์

### รัน Backend (Express)

```bash
cd backend
node server.js
```

API จะเปิดที่:
👉 `http://localhost:3000/api/hello`

ทดสอบด้วย:

```bash
curl http://localhost:3000/api/hello
```

---

### รัน Frontend (React)

```bash
cd frontend
npm start
```

Frontend จะเปิดที่:
👉 `http://localhost:3000` (หรือพอร์ตอื่นตามที่ React กำหนด)

---

## Environment Variables

สร้างไฟล์ `.env` ที่ root ของโปรเจกต์ (หรือใน `backend/`) เช่น:

```
PORT=3000
API_URL=http://localhost:3000
```

---

## Git

ขั้นตอนการใช้งาน Git:

```bash
git init
git add .
git commit -m "Initial commit: setup backend & frontend"
```

---

## License

MIT License

```

---

