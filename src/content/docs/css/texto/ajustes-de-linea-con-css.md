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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUBCRQ6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqzRxD%2FuwBR9QuryCYGWi5jk%2BckvzSHQtWc3WkzgqzVAiAbaZyS7e0sE60sXdqDH0RHge0wvkg2yFWfzdNJFbhePyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM3YXybIKaRCbjEtNJKtwDSdpTYbi%2Bd%2BtVy8xZ4S0xouuPyqmzg2aCS9ChYD4HPmAPyE%2FhlTocGo8jfMrjfUIrce7KrN5HBgRxoPKWekSFVXLPKOOywlPRvbrYjkGb2Jw2nC0o1o%2FCjs5PhR1fTnH%2BmWGJETuylfU%2Fc0kH3TAUI8irPbbRudQ6jML9ZSRemdhH9Z5BoLnYbPoyAt4hoKRMOlGU9gRvCL7V7tHQO4tt76AUi416B1b0WYWt%2BN%2FwwU3IL3RlZJ2X6Q9Tmn4IvPEZ32GTgKrKohaGLDmzMRGtrb9Vk%2F66wZoibEOBXFVgZnIOOlZ6qXuayVjt2hu5zSK7K0TPLSZJ0Gr17tnZm%2F7HIUQsSEa7PesyNypMCEPr32F%2B6mKybU1im0NMlCx3oRO9l4oMuSzdDCMeR998X2WLEHRVlDJc%2BPwpJrUAFeQZJWb6u94IDDF2kPh7vVdlG2eiM7xCt2zsiQh6V5kj8MgEMsDAXfmMxBFTavlutsp6y76DFCRbv%2F%2Bdmq7sctpJ4x6mWQrHkMlqAH1UR4mNA76bQugqZom6nVRpW94cAnkyV8kx%2Bfvvf2YGqAiyaR8M0db6JCRzXLp1nPoVPH%2BQ1ijyzObxeK0GllMSZVToS%2FocTFY30ozn4JxhO60hj%2FUwtIOJygY6pgHcn%2BnVq4W7%2FQj1mw1kea0fOhWzYDns6JaoJOYbf1mVLDNdxL50TIxq%2BEAljEBUPUFVaiXoshx6M%2B2EnDmc4bAPceiRVS06QtXpv%2BnHrimF2qHNcR9aWSbptKFh%2FsI1UA6mS6YfMmHwIroYxyfss5ttg3Qzp90zwtT%2BfSszT9NPRz%2FkjOh6uLByuhRYNb1XbMZHjzT6Z%2FGqOMDaxtOc%2FhMtueZ8LdRs&X-Amz-Signature=f3f7f8ea49ecfb321e1802a6226ea292077af4831b662b1f37e7472e0b97d17b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUBCRQ6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqzRxD%2FuwBR9QuryCYGWi5jk%2BckvzSHQtWc3WkzgqzVAiAbaZyS7e0sE60sXdqDH0RHge0wvkg2yFWfzdNJFbhePyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM3YXybIKaRCbjEtNJKtwDSdpTYbi%2Bd%2BtVy8xZ4S0xouuPyqmzg2aCS9ChYD4HPmAPyE%2FhlTocGo8jfMrjfUIrce7KrN5HBgRxoPKWekSFVXLPKOOywlPRvbrYjkGb2Jw2nC0o1o%2FCjs5PhR1fTnH%2BmWGJETuylfU%2Fc0kH3TAUI8irPbbRudQ6jML9ZSRemdhH9Z5BoLnYbPoyAt4hoKRMOlGU9gRvCL7V7tHQO4tt76AUi416B1b0WYWt%2BN%2FwwU3IL3RlZJ2X6Q9Tmn4IvPEZ32GTgKrKohaGLDmzMRGtrb9Vk%2F66wZoibEOBXFVgZnIOOlZ6qXuayVjt2hu5zSK7K0TPLSZJ0Gr17tnZm%2F7HIUQsSEa7PesyNypMCEPr32F%2B6mKybU1im0NMlCx3oRO9l4oMuSzdDCMeR998X2WLEHRVlDJc%2BPwpJrUAFeQZJWb6u94IDDF2kPh7vVdlG2eiM7xCt2zsiQh6V5kj8MgEMsDAXfmMxBFTavlutsp6y76DFCRbv%2F%2Bdmq7sctpJ4x6mWQrHkMlqAH1UR4mNA76bQugqZom6nVRpW94cAnkyV8kx%2Bfvvf2YGqAiyaR8M0db6JCRzXLp1nPoVPH%2BQ1ijyzObxeK0GllMSZVToS%2FocTFY30ozn4JxhO60hj%2FUwtIOJygY6pgHcn%2BnVq4W7%2FQj1mw1kea0fOhWzYDns6JaoJOYbf1mVLDNdxL50TIxq%2BEAljEBUPUFVaiXoshx6M%2B2EnDmc4bAPceiRVS06QtXpv%2BnHrimF2qHNcR9aWSbptKFh%2FsI1UA6mS6YfMmHwIroYxyfss5ttg3Qzp90zwtT%2BfSszT9NPRz%2FkjOh6uLByuhRYNb1XbMZHjzT6Z%2FGqOMDaxtOc%2FhMtueZ8LdRs&X-Amz-Signature=527898ccfbc4564ccad0062803dc7831e2914eed98f08cf978c5708c23d3afbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

