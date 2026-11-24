## **1. ملف tsconfig.json**

الإعدادات المطلوبة:

```
{
  "compilerOptions": {
    // File Layout
    "rootDir": "./src",
    "outDir": "./dist",

    "module": "nodenext",
    "target": "esnext",

    // Other Outputs
    "sourceMap": true,

    // Recommended Options
    "strict": true,
  }
}
```

## 2. شرح الإعدادات

# **strict**

- ال`strict` يفعّل مجموعة من الفحوصات الصارمة لاكتشاف أخطاء الأنواع، مثل منع `implicit any` والسماح بفحص `null` بشكل دقيق.

### مثال:

```
function greet(name) {
  return `Hello ${name}`;
}
//Parameter 'name' implicitly has an 'any' type.
```

مع `strict: true` سيظهر خطأ لأن `name` لم يُحدد نوعه، وسيُعامل كـ `any` ضمني.

```
function greet(name:string) {
  return `Hello ${name}`;
}
//(parameter) name: string
```

---

# **target**

- ال`target` يحدد إصدار JavaScript الذي سيحوّل TypeScript إليه.

### مثال:

```
"target": "esnext"
```

يعني أن TypeScript سيحوّل الكود إلى JavaScript متوافق مع إصدار esnext.

---

# **rootDir**

- ال`rootDir` يحدد المجلد الأساسي الذي يحتوي ملفات TypeScript.

### مثال:

```
"rootDir": "./src"
```

يعني أن ملفات TypeScript الأساسية موجودة داخل `src`.

---

# **outDir**

- ال`outDir` يحدد المجلد الذي ستُحفظ فيه ملفات JavaScript الناتجة بعد التحويل.

### مثال:

```
"outDir": "./dist"
```

يعني أن ملفات JavaScript الناتجة ستُحفظ داخل `dist`.

---

# **sourceMap**

- ال`sourceMap` ينشئ ملفات `.map` لتسهيل تتبع الأخطاء في ملفات TypeScript أثناء Debugging.

```
"sourceMap": true
```

ينشئ ملف `.js.map` بجانب ملف JavaScript، ويساعدنا على تتبع الأخطاء والعودة إلى ملف TypeScript الأصلي.

---

- كيف نختبر الإعدادات؟

نفتح Terminal داخل المشروع :

```
npx tsc
```

هذا الأمر يشغّل TypeScript Compiler ويحوّل ملفات `.ts` إلى `.js` حسب إعدادات `tsconfig.json`.

إذا لم تظهر أخطاء، وظهرت ملفات JavaScript داخل `dist`، فعملية التحويل نجحت.

---
