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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AOPMPAP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYBa4EmTOQGjHhu%2B7dZHkjnFial8sGxB8TCfvfuEZyLAiEAnJW5A1c6R79iYYeiwlQgG2PXlzxlLYdbZMBUKo8A1gkq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDMh4B4ZZFJL15oikbyrcA7z7tOXYTCVM7Iw0m6wPqB3XMGDuF5neGxO5B3QxuYEWrM1DVmY8%2BjHM1n2ETVi3FXDxhT0M0l%2FD8XWeybaDjKPsViM9EmFWc8OAgfy8i6jXR1ClL8Y9ClkQZR8%2BvkcLOYmbDeREg4%2F%2BRWlHAVdL7YGdAXdFm0uSWgH2hO43n8aUA1SWRLyhYCN93lxmjA2ErRBGGPWEbXddRnao1OexYa9XcfRs79vQL04V4o7aRvbKiOOu9E4Ws%2BMarrFRmpnPDK%2B0Bsk3FHFl8qMS1vGFBV7GszuxuslKKVWkm3FtxpLslt9CcPWJJJ0DTT9Ig%2BT7sb2KxBoOJhKfG%2B%2BGtIBoVnHjtVBZjhhALzyRTO1maDa0u1ntwj6e0db1r9ku2CJm6jqWhZH%2FCLdRsnC2v2FjCB8RlzbnlWDBw%2FBjc1JCiaNhgof0uY%2FCZ6H8X%2BEQygz9LVHIJvoLnpy%2F2bYZ2qEQfUAE5RfCHdwWsLN3C595K7nD2G7fxNLiLoBDWAUMd1N%2B5meAeqzUmPl39LFoxHjO0Lz3kVN5NUAzRNmWxdn5F37MAFbO%2FeVhRA%2Fxbcgc0fJhNCdKPtqxTJKN6hFKBH%2BsuecFPexWP8lQKbhMnFR46okCgg4pkvlgdzBMkxTeMLiWiMoGOqUBusQuyIgaZJSgYEuhwjXyPpXf3TLR5gFgf61GAkpiYJBXJmzEJvy2xAgHEhsUipC%2Fza1haqqq46XPQlz69GL03KhiIfjCyr1YF%2FGJnBSg5jdGnT54bEAbPKImObwiUnajeesIA5cWXGujNZ61eGwWK78ZFPIIFS5PG4PfFg%2FVAkR2PYnrYRhc7l%2FiIQRx0kfPuj4xNnJDK83uSIHE1ezQ0iWowGSI&X-Amz-Signature=eca95826928615cafba49b44951f3f8532c1c7ceb33abf23a061f3a895c767d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AOPMPAP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYBa4EmTOQGjHhu%2B7dZHkjnFial8sGxB8TCfvfuEZyLAiEAnJW5A1c6R79iYYeiwlQgG2PXlzxlLYdbZMBUKo8A1gkq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDMh4B4ZZFJL15oikbyrcA7z7tOXYTCVM7Iw0m6wPqB3XMGDuF5neGxO5B3QxuYEWrM1DVmY8%2BjHM1n2ETVi3FXDxhT0M0l%2FD8XWeybaDjKPsViM9EmFWc8OAgfy8i6jXR1ClL8Y9ClkQZR8%2BvkcLOYmbDeREg4%2F%2BRWlHAVdL7YGdAXdFm0uSWgH2hO43n8aUA1SWRLyhYCN93lxmjA2ErRBGGPWEbXddRnao1OexYa9XcfRs79vQL04V4o7aRvbKiOOu9E4Ws%2BMarrFRmpnPDK%2B0Bsk3FHFl8qMS1vGFBV7GszuxuslKKVWkm3FtxpLslt9CcPWJJJ0DTT9Ig%2BT7sb2KxBoOJhKfG%2B%2BGtIBoVnHjtVBZjhhALzyRTO1maDa0u1ntwj6e0db1r9ku2CJm6jqWhZH%2FCLdRsnC2v2FjCB8RlzbnlWDBw%2FBjc1JCiaNhgof0uY%2FCZ6H8X%2BEQygz9LVHIJvoLnpy%2F2bYZ2qEQfUAE5RfCHdwWsLN3C595K7nD2G7fxNLiLoBDWAUMd1N%2B5meAeqzUmPl39LFoxHjO0Lz3kVN5NUAzRNmWxdn5F37MAFbO%2FeVhRA%2Fxbcgc0fJhNCdKPtqxTJKN6hFKBH%2BsuecFPexWP8lQKbhMnFR46okCgg4pkvlgdzBMkxTeMLiWiMoGOqUBusQuyIgaZJSgYEuhwjXyPpXf3TLR5gFgf61GAkpiYJBXJmzEJvy2xAgHEhsUipC%2Fza1haqqq46XPQlz69GL03KhiIfjCyr1YF%2FGJnBSg5jdGnT54bEAbPKImObwiUnajeesIA5cWXGujNZ61eGwWK78ZFPIIFS5PG4PfFg%2FVAkR2PYnrYRhc7l%2FiIQRx0kfPuj4xNnJDK83uSIHE1ezQ0iWowGSI&X-Amz-Signature=db11b0b1a8b623ce777618d89f42bd014db61553a26927680697b42843c61901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

