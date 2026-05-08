import styles from "../../styles/LoginPage.module.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const registerSchema = z.object({
    fullname: z.string().min(1, "กรุณากรอกชื่อ-นามสกุล"),

    username: z
      .string()
      .min(3, "Username ต้องมีอย่างน้อย 3 ตัว")
      .max(12, "Username ต้องไม่เกิน 12 ตัว")
      .regex(
        /^[a-zA-Z0-9]+$/,
        "Username ใช้ได้เฉพาะภาษาอังกฤษและตัวเลข"
      ),

    email: z
      .string()
      .min(1, "กรุณากรอกอีเมล")
      .email("รูปแบบอีเมลไม่ถูกต้อง"),

    password: z
      .string()
      .min(8, "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร"),

    confirmPassword: z
      .string()
      .min(1, "กรุณายืนยันรหัสผ่าน"),
  })

  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "รหัสผ่านไม่ตรงกัน",
  });

export default function RegisterPage() {
  const { register,handleSubmit,formState: { errors }, } = useForm(
    { resolver: zodResolver(registerSchema), }
    );

  const onSubmit = (data) => {
    alert("สมัครสมาชิกสำเร็จ!");
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Register</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.formCard}
      >
        <div className={styles.inputGroup}>
          <label className={styles.label}>Fullname</label>

          <input
            {...register("fullname")}
            className={styles.input}
          />

          {errors.fullname && (
            <span className={styles.errorText}>
              {errors.fullname.message}
            </span>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Username</label>

          <input
            {...register("username")}
            className={styles.input}
          />

          {errors.username && (
            <span className={styles.errorText}>
              {errors.username.message}
            </span>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Email</label>

          <input
            {...register("email")}
            className={styles.input}
          />

          {errors.email && (
            <span className={styles.errorText}>
              {errors.email.message}
            </span>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Password</label>

          <input
            {...register("password")}
            type="password"
            className={styles.input}
          />

          {errors.password && (
            <span className={styles.errorText}>
              {errors.password.message}
            </span>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Confirm Password
          </label>

          <input
            {...register("confirmPassword")}
            type="password"
            className={styles.input}
          />

          {errors.confirmPassword && (
            <span className={styles.errorText}>
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <button className={styles.submitButton}>
          สมัครสมาชิก
        </button>
      </form>
    </div>
  );
}