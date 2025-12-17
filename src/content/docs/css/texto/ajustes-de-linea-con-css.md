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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OBVU2BL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC374kjxacnnuCadGuZ%2FMWsp2sedxMf39Yg7WXhcG4bcAIhAMmVlHlhti1GmFjimLILSrzvm9mLTodPUv%2F9qrbdeXiYKv8DCHwQABoMNjM3NDIzMTgzODA1IgxYOsb3%2BKGbjiVihnkq3AOzMcXzzfVa%2BeaKytVCMTqOj9jpBeJCp9FFJR%2BX4dirJU7ur5JXcxov9xfy8Du7kI3FDxD%2FRMNJJJ9ny6sU15kr7RP8Tq2NIPH7ux%2Bgf2gFNYsyXU%2BtAN%2BniVKHhR3hcn5R4DT%2FxJSmoXu7VlsnIG1ehxT64GG4L9WkgNi74wfzTXNIUe8fVoZIgMYIoZfgDWfxO3ot%2FACay434soIycx%2BLXTeaxtVqCcp3%2FcT7l9iapKz1Gm3fIecGW0I7FYPnkB%2FYXtK1R8FB3Af7tUhVV8aHqjv%2BLP7SIF9ohJgC2F56eu7fa%2BT7dExCpK0goCJA%2FZPeomUoyrQaDhuv%2Fw1OuAfV6Se5IelyB%2F6LqnLCnZ1Zg37NVRWVidkTEfMCvhsDDAr2T6zdrwpa551kMQsW5Qh6owDQOUQKIMVmLLe8m8xT%2F9ZEHnh96DjcTvsawZEP8z8LvK9MBYNMtk%2Fg1bObfJyjidA7XHX6Yej2oHTZ0bWmMvTWprwhpRvgmDzWAYkh%2BWxQAaqMWV3mIVzhL9yvyyHgOVYC%2Fhp4lfhMLl5YAMAzJzJBNxzzxLdD47TM3E6VtO%2FjXpeGmr1%2FvvlMsuG65Tyk8xrEkB5MeuDh%2F5LD6qtsMjY2TcFs9gOf69SOwTD3jorKBjqkAVMseA0VGCWPSJmcLaVjVI95HNPWwJ46I%2FLYDeT3A6uXz32G83LjVOH11xLf%2Bhef7JBEjAqVNo2rdz4EZAdLDJ%2FuWJRV1K7miB7Ct2AeOjfzMnkOPyfRqQrRcphJHPL%2FMngKXuGDcIq%2BDW8PgAHBYKiBsc8UG9CxkT9RjaDJ4joC%2B32oD39tvOfxLzpP1AWg59YvIwNXCr%2F1574bAiM4Z5h9c%2B7t&X-Amz-Signature=87fe1513a8e24a47feac78fcc82aa483ff7ff7bb0ae73b6210f84d8bfe1d1ee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OBVU2BL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC374kjxacnnuCadGuZ%2FMWsp2sedxMf39Yg7WXhcG4bcAIhAMmVlHlhti1GmFjimLILSrzvm9mLTodPUv%2F9qrbdeXiYKv8DCHwQABoMNjM3NDIzMTgzODA1IgxYOsb3%2BKGbjiVihnkq3AOzMcXzzfVa%2BeaKytVCMTqOj9jpBeJCp9FFJR%2BX4dirJU7ur5JXcxov9xfy8Du7kI3FDxD%2FRMNJJJ9ny6sU15kr7RP8Tq2NIPH7ux%2Bgf2gFNYsyXU%2BtAN%2BniVKHhR3hcn5R4DT%2FxJSmoXu7VlsnIG1ehxT64GG4L9WkgNi74wfzTXNIUe8fVoZIgMYIoZfgDWfxO3ot%2FACay434soIycx%2BLXTeaxtVqCcp3%2FcT7l9iapKz1Gm3fIecGW0I7FYPnkB%2FYXtK1R8FB3Af7tUhVV8aHqjv%2BLP7SIF9ohJgC2F56eu7fa%2BT7dExCpK0goCJA%2FZPeomUoyrQaDhuv%2Fw1OuAfV6Se5IelyB%2F6LqnLCnZ1Zg37NVRWVidkTEfMCvhsDDAr2T6zdrwpa551kMQsW5Qh6owDQOUQKIMVmLLe8m8xT%2F9ZEHnh96DjcTvsawZEP8z8LvK9MBYNMtk%2Fg1bObfJyjidA7XHX6Yej2oHTZ0bWmMvTWprwhpRvgmDzWAYkh%2BWxQAaqMWV3mIVzhL9yvyyHgOVYC%2Fhp4lfhMLl5YAMAzJzJBNxzzxLdD47TM3E6VtO%2FjXpeGmr1%2FvvlMsuG65Tyk8xrEkB5MeuDh%2F5LD6qtsMjY2TcFs9gOf69SOwTD3jorKBjqkAVMseA0VGCWPSJmcLaVjVI95HNPWwJ46I%2FLYDeT3A6uXz32G83LjVOH11xLf%2Bhef7JBEjAqVNo2rdz4EZAdLDJ%2FuWJRV1K7miB7Ct2AeOjfzMnkOPyfRqQrRcphJHPL%2FMngKXuGDcIq%2BDW8PgAHBYKiBsc8UG9CxkT9RjaDJ4joC%2B32oD39tvOfxLzpP1AWg59YvIwNXCr%2F1574bAiM4Z5h9c%2B7t&X-Amz-Signature=b7ee6483a0df80555632e008a86b953940bf26b03f6beef65e8eb4b572293a35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

