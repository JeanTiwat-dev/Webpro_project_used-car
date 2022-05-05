<template>
<!-- <welcome-layout> -->
<div id="app">
    <div class="w-full  min-h-screen bg-gray-100 flex items-center justify-center">
        <div class="w-1/3 px-8 pt-4 pb-3 h-full bg-orange-300 flex flex-col justify-center rounded-3xl shadow-xl">
            <p class="text-center pb-2 text-2xl font-bold">เงื่อนไขการขายสินค้า</p>
            <div class="h-80 bg-orange-200 p-8 overflow-y-scroll rounded-lg">
                <p>ทุกครั้งในการซื้อ-ขาย รถมือสอง ไม่ว่าจะเป็นทั้งผู้ซื้อหรือผู้ขาย เรื่องเอกสารก็เป็นสิ่งสำคัญที่ทั้งสองฝ่ายต้องเตรียมมาให้ครบถ้วนเพื่อการซื้อขายที่ถูกต้อง  ในกรณีที่รถจดทะเบียนเป็นชื่อบุคคลเเละไม่ติดไฟแนนซ์ การซื้อขายอันชอบธรรมย่อมเกิดขึ้นได้ เเละนี่คือของเอกสารที่ผู้ซื้อ-ขายจำเป็นต้องใช้</p>
                <p>1.สมุดคู่มือจดทะเบียนเล่มจริงที่ต้องเป็นสมุดเล่มทะเบียนที่มีชื่อเจ้าของรถ เลขตัวถัง เลขเครื่องยนต์ สีรถ ต้องตรงกับรถคันที่จะซื้อขายทุกอย่างรวมถึงควรครวจสอบเรื่องการเสียภาษีด้วยว่ามีการขาดต่อภาษีหรือไม่ เพราะหากภาษีขาดการซื้อรถก็จะไม่มีทางเกิดขึ้นได้ เจ้าของรถต้องรับผิดชอบด้วยการชำระจ่ายภาษีให้ถูกต้อง</p>
                <p>2.หนังสือเอกสารสัญญาซื้อ-ขายรถยนต์ ในส่วนของเอกสารสัญญาซื้อ-ขาย รถมือสอง จะต้องกรอกรายละเอียดข้อมูลของ ผู้ซื้อ-ผู้ขาย รายละเอียดของรถ ยี่ห้อ, รุ่น, ปี, เกียร์, สี, หมายเลขทะเบียน เเละราคา เงื่อนไขต่างๆ ที่ทั้งสงฝ่ายต้องเข้าใจตรงกันเเละสัญญาฉบับนี้ต้องจัดทำขึ้นมา 2ฉบับ กรอกข้อมูลให้ครบเเละเหมือนกันทั้งสองฉบับพร้อมลายเซ็น ผู้ซื้อ-ผู้ขาย พยานทั้งสองฝ่าย</p>
                <p>3.แบบคำขอโอนเเละรับโอน เอกสารชุดนี้ผู้โอน(ผู้ขาย) ต้องกรอกข้อมูลส่วนให้ครบ เช่นเดียวกับผู้รับโอน(ผู้ซื้อ) เเละรายละเอียดต่างๆ ของรถเเละเอกสารประกอบเพื่อแจ้งแก่นายทะเบียน</p>
                <p>4.ใบมอบอำนาจ ในกรณีที่ผู้ขายไม่สามารถมาดำเนินการซื้อ-ขาย โอน รถมือสอง ด้วยตัวเองที่ขนส่ง ผู้ขายสามารถให้บุคคลอื่นทำหน้าที่แทนได้ แต่ผู้ขายต้องกรอกประวัติเเละที่อยู่ลงในเอกสารให้ครบถ้วนรวมถึงข้อมูลของผู้มอบอำนาจ</p>
                <p>5.สำเนาบัตรประชาชนทั้งผู้ซื้อ-ขาย ที่ยังไม่หมดอายุพร้อมขีดคร่อม “ใช้เพื่อดำเนินการเกี่ยวกับรถยนต์หมายเลขทะเบียนนี้……….เท่านั้น” เพื่อความปลอดภัย พร้อมเซ็นสำเนาถูกต้องเเละชื่อกำกับ</p>
            </div>
            <div class="flex justify-around pt-2">
                <div class="bg-red-400 rounded-full px-3 py-1 cursor-pointer" @click="cancel()">cancel</div>
                <div class="bg-green-400 rounded-full px-3 py-1 cursor-pointer" @click="confirm()">confirm</div>
            </div>
        </div>
    </div>
</div>
<!-- </welcome-layout> -->
</template>
<script>
import axios from "axios";
// import WelcomeLayout from "../layouts/welcome.vue";
export default {
    name: "requestseller",
    // components: {
    //     WelcomeLayout
    // },
data() {
    return {
        user: []
    };
},
mounted() {
    this.getData();
    this.checkseller();
},
methods: {
    getData() {
        this.user = JSON.parse(localStorage.getItem("user_account"));
    },
    checkseller() {
        this.user = JSON.parse(localStorage.getItem("user_account"));
            console.log(this.user.seller_type == 1);

        if(this.user.seller_type == 1) {
            this.$router.push("/sell");
        }
    },
    confirm() {
        if(this.user.user_age >= 20) {
            axios.put(`http://localhost:3000/reqSeller/${this.user.user_id}`)
            .then(_res => {
                alert("ส่งคำขอเรียบร้อย");
                this.$router.push("/");
            });
        } else {
            alert("กรุณาตรวจสอบอายุของคุณ");
            this.$router.push("/");
        }
    },
    cancel() {
        this.$router.push("/");
    }
    }
}
</script>
