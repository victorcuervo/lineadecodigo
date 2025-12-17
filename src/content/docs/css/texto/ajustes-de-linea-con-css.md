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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UYG2NNY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCykjaCEnY%2B5hi7ctegeQ%2Fisb1OGZxnyL8KDhp5a6WqNQIgdE1z2qPQGRIxLWE5tP2eKFdjvuabb%2BOGzSwHHqEHPYUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRp%2BioVDerk54XQlircAy1RuIXy6SS6SyQE1VKSeJ%2Bh%2BNqLJZ0ZH2C8cLxkAcPhY48i9DLmZaFiIiW4RTBlyQ79RpgS%2F2NnHm%2BhV%2B4gl0B6FxyVrhmubRK1mWG0BQFq42aHoaZeuNsJdaOiyKO%2B8%2B4PV3vrrObZZYiFYwM3HMQSQ3%2Bvlh9VMqUlixcZu3QJOH1BIfy9lzKfcI3P7O%2FKexel8MIl0KVLS1CriTNFAdQ%2B%2BrQH98hSIuesIvyZdhmejuv7pnoBh6s%2BjK5nXfiBknd2sWopQVXJyq2GuTEW5zdyS%2Bv%2BQMf5CSFUI3u21aDXawkNtUcUnAmdloK0F%2FG9UJcFkHLXrLXWSXfE%2BUpGhxthATSVYf85guKAu63wjo6QLuWcmJAf2arPjgtBgK%2FAF2ySIWxL2uD6MVZfmBVAloSxQnLUefNHtzCSfuWS%2FfxqJIzws1FKR6Iu3DqRan6cNAUP3ZFRoqac1az2p6QrqJPb3PK0sWupvr6MBio0vXl9iX8Nra2IZY%2BeZ216MEYcv2rfXkLL6uCDvV287NQ09FFpnjI9S9VsSHWckc9Kl9UND0NLQdt2i5RaQZmnEbr9X630110XUnG8Bsh1kRX6etj2mccAhVu%2FZw5o1yuiXMGtlHpNd8exJQ8%2Bky4jMICgi8oGOqUByks4y6tf4nY8V04VscILyc6vuQazKgedqQve34QTi4XcfSLQ6XGkGZiXSBVIDiWHOIne059pYEv2u%2B8zNb2WuEmx8FNwE6o1RCPuaitHxm1IQ%2B28SsvtkUccpITmoyRm57DsJ2l7bKsUTju0tILEFo2gM4z4zk1EshpcbBpRQn%2FaIuVE%2FqhA0e%2BauAd26bBRCxf0y%2Fv2hIDk6foNfcMTMfq%2B8I4x&X-Amz-Signature=e94f713a1d9676e66df2e0977b3c5a8d4d15f4e19a73b3cfe9110eb0a5568772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UYG2NNY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCykjaCEnY%2B5hi7ctegeQ%2Fisb1OGZxnyL8KDhp5a6WqNQIgdE1z2qPQGRIxLWE5tP2eKFdjvuabb%2BOGzSwHHqEHPYUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRp%2BioVDerk54XQlircAy1RuIXy6SS6SyQE1VKSeJ%2Bh%2BNqLJZ0ZH2C8cLxkAcPhY48i9DLmZaFiIiW4RTBlyQ79RpgS%2F2NnHm%2BhV%2B4gl0B6FxyVrhmubRK1mWG0BQFq42aHoaZeuNsJdaOiyKO%2B8%2B4PV3vrrObZZYiFYwM3HMQSQ3%2Bvlh9VMqUlixcZu3QJOH1BIfy9lzKfcI3P7O%2FKexel8MIl0KVLS1CriTNFAdQ%2B%2BrQH98hSIuesIvyZdhmejuv7pnoBh6s%2BjK5nXfiBknd2sWopQVXJyq2GuTEW5zdyS%2Bv%2BQMf5CSFUI3u21aDXawkNtUcUnAmdloK0F%2FG9UJcFkHLXrLXWSXfE%2BUpGhxthATSVYf85guKAu63wjo6QLuWcmJAf2arPjgtBgK%2FAF2ySIWxL2uD6MVZfmBVAloSxQnLUefNHtzCSfuWS%2FfxqJIzws1FKR6Iu3DqRan6cNAUP3ZFRoqac1az2p6QrqJPb3PK0sWupvr6MBio0vXl9iX8Nra2IZY%2BeZ216MEYcv2rfXkLL6uCDvV287NQ09FFpnjI9S9VsSHWckc9Kl9UND0NLQdt2i5RaQZmnEbr9X630110XUnG8Bsh1kRX6etj2mccAhVu%2FZw5o1yuiXMGtlHpNd8exJQ8%2Bky4jMICgi8oGOqUByks4y6tf4nY8V04VscILyc6vuQazKgedqQve34QTi4XcfSLQ6XGkGZiXSBVIDiWHOIne059pYEv2u%2B8zNb2WuEmx8FNwE6o1RCPuaitHxm1IQ%2B28SsvtkUccpITmoyRm57DsJ2l7bKsUTju0tILEFo2gM4z4zk1EshpcbBpRQn%2FaIuVE%2FqhA0e%2BauAd26bBRCxf0y%2Fv2hIDk6foNfcMTMfq%2B8I4x&X-Amz-Signature=2d9f3bb3289fc12669bbf3ea97d6956458299756b43186ce6039fb92908ae346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

