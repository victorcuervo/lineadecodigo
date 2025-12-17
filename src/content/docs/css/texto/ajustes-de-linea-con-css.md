---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SHEPZLO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6VkDx%2Be5tz9bPmkCEZ4uJCZ4s69BQWcCQAj0VFHLY4QIhAMBgTMISUdJBctX9HmzZIHdUy5Once%2F4nCsa7rztklHRKv8DCHMQABoMNjM3NDIzMTgzODA1Igw2B1q%2FGEiOjMLaz74q3APVnHZKuWADlObYWnqNBaFyFQbdFI9WyLWX32V1HudCU4mIzAi%2FnUAVjP5c8t4ImovaxUSBo25RUsxbAQGZ1Kif3OrmyHEa2lO2IGBkTYT8zcV%2FC%2BRqwe69ieg7K9E1Ni2Bbedp9jJHpwSbCC2UAfQTKDYoB0P%2F0Ocj1GGoKBNavL6d2A%2FKqP%2B098m8VdGe%2FACAogunkbm2Uk4almtDZcejxLyfRRJhaoDGNPttXv1LKdLMAOVDtNTZe0l6LZrb8WGgSMFuKuabrLU25sqLZN8cO9u3dpihuCI1OOKvv6TCK8JNDzQf9sxjj%2B7lt2h1jahk4mIsufg1q9EXx3SMBFnzCDea3wh1KGhPhkOwuIJGQh%2BDeoh%2FOxKZeId4DD4hV25jsZ5SG%2FAGl2zSLmOA%2Fz79yhHI4Bqt6jMT%2BcObqjzZWwijlOfECVMMeTJ3pca73fwbJrdft4bngFmtxpjjQ2ir5CZ9UygaKhSWctksig9JJVuMXDVoxiIkoNF8bp1pYpjahKxEQwgbTMkdEVeAmMJrqYFu1PUGo3k6g39Tn1yeU8csi11uU%2B2C6zLbiVcB10wi%2FasiW90%2FXSEP4vItXmscoO23y70EbFbGnQeRiaVzQ4%2B0Kb%2FLlfzPyuL%2FtjDBmIjKBjqkAaKvQg0Rc4lf7jqTp2Nred%2BVaAuFsi6Pbrg7xfrGJuVM7r1pSrGXveqtaby%2BWiXRwDGTFqDyH0fABSdcV9b3s9oDyiV9FoIwRB2%2BelLkX%2F0K3JBjkarvwxpn9ztQ1LPUv50nOAClNPOPD2O4MQCOEf0Cpg629Zb0t%2FQq%2BJczpdiR6pxSWWz84zE%2FDV03x6fq1HCC4tu9Q9iPwyFsoum%2BQ3sb2fLP&X-Amz-Signature=ecc46d6bdd75df6a85140e37350508a7df62608926789b94d915235c309096b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SHEPZLO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6VkDx%2Be5tz9bPmkCEZ4uJCZ4s69BQWcCQAj0VFHLY4QIhAMBgTMISUdJBctX9HmzZIHdUy5Once%2F4nCsa7rztklHRKv8DCHMQABoMNjM3NDIzMTgzODA1Igw2B1q%2FGEiOjMLaz74q3APVnHZKuWADlObYWnqNBaFyFQbdFI9WyLWX32V1HudCU4mIzAi%2FnUAVjP5c8t4ImovaxUSBo25RUsxbAQGZ1Kif3OrmyHEa2lO2IGBkTYT8zcV%2FC%2BRqwe69ieg7K9E1Ni2Bbedp9jJHpwSbCC2UAfQTKDYoB0P%2F0Ocj1GGoKBNavL6d2A%2FKqP%2B098m8VdGe%2FACAogunkbm2Uk4almtDZcejxLyfRRJhaoDGNPttXv1LKdLMAOVDtNTZe0l6LZrb8WGgSMFuKuabrLU25sqLZN8cO9u3dpihuCI1OOKvv6TCK8JNDzQf9sxjj%2B7lt2h1jahk4mIsufg1q9EXx3SMBFnzCDea3wh1KGhPhkOwuIJGQh%2BDeoh%2FOxKZeId4DD4hV25jsZ5SG%2FAGl2zSLmOA%2Fz79yhHI4Bqt6jMT%2BcObqjzZWwijlOfECVMMeTJ3pca73fwbJrdft4bngFmtxpjjQ2ir5CZ9UygaKhSWctksig9JJVuMXDVoxiIkoNF8bp1pYpjahKxEQwgbTMkdEVeAmMJrqYFu1PUGo3k6g39Tn1yeU8csi11uU%2B2C6zLbiVcB10wi%2FasiW90%2FXSEP4vItXmscoO23y70EbFbGnQeRiaVzQ4%2B0Kb%2FLlfzPyuL%2FtjDBmIjKBjqkAaKvQg0Rc4lf7jqTp2Nred%2BVaAuFsi6Pbrg7xfrGJuVM7r1pSrGXveqtaby%2BWiXRwDGTFqDyH0fABSdcV9b3s9oDyiV9FoIwRB2%2BelLkX%2F0K3JBjkarvwxpn9ztQ1LPUv50nOAClNPOPD2O4MQCOEf0Cpg629Zb0t%2FQq%2BJczpdiR6pxSWWz84zE%2FDV03x6fq1HCC4tu9Q9iPwyFsoum%2BQ3sb2fLP&X-Amz-Signature=b58f10dc462fbceef7d30559749dd87333f07f79b85d2a7d45acf73a5f42c74c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

