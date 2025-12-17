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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRPFPAD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQq0nsUmLBYtoBiGWC6ImxCFNXSEX9cguTKlrqSx4vngIhANCAhV%2Fww%2BN8G7nUDm3nweZfjCYf1z3b8krCTRim16nXKv8DCHUQABoMNjM3NDIzMTgzODA1Igw3TvisYKiwJDyZ0N4q3AMZZb5MAl9yxv0H3TfARr9tvzOv77r5EZ84xAP9dCNVHpUYk5qyJ4iUsOPHxawhSpx5ESTXsheT86qJ3SHT2jYDoOC8Vs7sTNCIWeiUYuhLnp6Vw1EQUB5mKi8OdGBANFFa%2FYq58E3%2FvN8XPcTPDuiwL3Dfyf47MMYPgK5WORvAQ5AdqtyEl4RLTH35QcErWuX%2BZGeMBdlSGzDTtCXLJLq1qu9Ked%2F%2FJBOYVSm%2FZNLC8KpxhtvwUbn4iNAD9p5Qy9FiU3A%2Bs4ciuh0jRleX79V2WnNsrgCPSsPAQZNRVRpNXbpnByqz1ihMmGPNX%2Ff5t9eOPfJFG0csYbrm27OaX2C38LWcUSeBk3dz%2Bi4BYwC7sk2OdygTwVyLpAWEYn8vnf4PcXa9jr%2BuRtpRU2xbThGGFABW34vnhqivh6Y8KYzIQ%2F%2FGM6QobEpdxeBJnW1W2HstBaGTsBngktusFn3Kv%2BlAtg7H363lIt07mvGHYuxiX0rMrJ17U%2FexP2jUOMfVdv8ySsXGLctvRH4WoSpN0RpkBMniInHSPwcyl3QzHbcBFZRn81%2BKCcBnPFFvqQ90E5dOxdQS2CXGUcN9%2FL0AHUqMZDc4xGvD%2BvAIRF6aG3gGhk5TcxrJenDQn7dBSDCYzojKBjqkAR%2BNqXWOYbP538W4HwXeeQtL%2Bp8uLIB%2F1crCkUXVc4%2BR%2FQvFHfKaQx9JEUmIDEgTm4ldPpfQIDGyk%2B0n9fQ2tKQxg2Io69e80Bse%2BoFYxWg5gvn2dHYszVOcGE%2FYFrqrduBURExrgV7Pxqxv4YsufXW7M42%2BTZlqxeyNBLs6h9O4Hhp9uBgYDAZys61qbuIbnE66d4OqO2ZxnqmnM7X66K8mpzPP&X-Amz-Signature=1a3916fe2f9d54d21271ffc3af60c256827f5a81b3124ae9c457549636dc2e3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRPFPAD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQq0nsUmLBYtoBiGWC6ImxCFNXSEX9cguTKlrqSx4vngIhANCAhV%2Fww%2BN8G7nUDm3nweZfjCYf1z3b8krCTRim16nXKv8DCHUQABoMNjM3NDIzMTgzODA1Igw3TvisYKiwJDyZ0N4q3AMZZb5MAl9yxv0H3TfARr9tvzOv77r5EZ84xAP9dCNVHpUYk5qyJ4iUsOPHxawhSpx5ESTXsheT86qJ3SHT2jYDoOC8Vs7sTNCIWeiUYuhLnp6Vw1EQUB5mKi8OdGBANFFa%2FYq58E3%2FvN8XPcTPDuiwL3Dfyf47MMYPgK5WORvAQ5AdqtyEl4RLTH35QcErWuX%2BZGeMBdlSGzDTtCXLJLq1qu9Ked%2F%2FJBOYVSm%2FZNLC8KpxhtvwUbn4iNAD9p5Qy9FiU3A%2Bs4ciuh0jRleX79V2WnNsrgCPSsPAQZNRVRpNXbpnByqz1ihMmGPNX%2Ff5t9eOPfJFG0csYbrm27OaX2C38LWcUSeBk3dz%2Bi4BYwC7sk2OdygTwVyLpAWEYn8vnf4PcXa9jr%2BuRtpRU2xbThGGFABW34vnhqivh6Y8KYzIQ%2F%2FGM6QobEpdxeBJnW1W2HstBaGTsBngktusFn3Kv%2BlAtg7H363lIt07mvGHYuxiX0rMrJ17U%2FexP2jUOMfVdv8ySsXGLctvRH4WoSpN0RpkBMniInHSPwcyl3QzHbcBFZRn81%2BKCcBnPFFvqQ90E5dOxdQS2CXGUcN9%2FL0AHUqMZDc4xGvD%2BvAIRF6aG3gGhk5TcxrJenDQn7dBSDCYzojKBjqkAR%2BNqXWOYbP538W4HwXeeQtL%2Bp8uLIB%2F1crCkUXVc4%2BR%2FQvFHfKaQx9JEUmIDEgTm4ldPpfQIDGyk%2B0n9fQ2tKQxg2Io69e80Bse%2BoFYxWg5gvn2dHYszVOcGE%2FYFrqrduBURExrgV7Pxqxv4YsufXW7M42%2BTZlqxeyNBLs6h9O4Hhp9uBgYDAZys61qbuIbnE66d4OqO2ZxnqmnM7X66K8mpzPP&X-Amz-Signature=76afeee0c5e880d2c7035469a1473ed74d6ed38a7a8614fe633202059e415ac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

