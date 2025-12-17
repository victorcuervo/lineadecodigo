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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665777LKBO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz5NOvTVaZCpYaBa6ksUvbjd8lQZgP%2BC%2BixDge%2FQ9iuQIhAMD5HwfFhg29BlubfwCowL%2BNSvO4FITosI41JKzeSSYWKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNzyln2ZZ2%2B57tdU8q3AO80HNFEHjuT6czMfAxzZQKfkxksaY5dAmj8QxDE%2BSxfcDt4OfAH7u1RlYKYsZfTEeobEoo56aM%2B05ZIaGy3r2o7VeP2eIpEVfnsJ2be7GnGMyLIrP3OylL9nkpNpjuzMnD4w%2B4tfv8itEz%2FlYcp4xWrcLu%2BNj7wkSCPABGRtiaz72yQhjE5eyFSqDPVGdTiSMJypo5wRu4YEs%2FuiSpWQwqPXfaVtUfr%2BMFStkuHNaeOyaKk7RsW%2FRfthdSMPe%2FSJvV9oh5iDof9uIOsu99X7gHFHO%2BgzpXciUR1D3pRonJpbsI5Ua3j4e6ylLFArvHis3b8XQnNexD81DbIkSlyaJqNOQfiK9K3BOCt7b4KAq8t8iCeOTXBFiLnvXc%2BoIMx%2FI2QoWyXsGKaXzWvle0kYBPx%2FMBjbCMx%2BJqff1y8N8F8V9Fr2Z4UD6ks9oTvV%2BgQCmcjouGi7LmyCSPyObN0NhbJj%2B5Bo1SIZZNNQHsEctyecYBEiVpKfYyYpmYmRCv32FWIuMZZTjt164FrkRUtIzVElC%2FYA4SZhbqEz%2FFkyzzH9ejScpYXFezjH83zfVfzuIz20Etycbw33EWp%2FS8it9ScsokO55lo1uYE7G9ewRll60C%2FohWefQBJ6ZXfjCyrozKBjqkAb6bkVIppwHkXgsQUVVIDf6G8XSqLTNhLFDoGjc3%2BSdfm44GQBI4exbyTsN8Klk2N8o6UL50SvIrkDRG%2FOsZ1MGYj915W6gvbvZn9mdxNHYbmoVAuKqYO%2BRMrl6uaFxZh1QeqiPzKuHEzkICp9yeYEbK3Hr2prsfZPXeE6Q3PFtbjlVom3Z0X%2BmWPhbXbeqnumJ5QNxfLBx9gkHSVrAkHjHya2VP&X-Amz-Signature=57f5f559551f0279ed0c4320af1c3e9cfe0297ff543259f32eff2ecd46054735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665777LKBO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz5NOvTVaZCpYaBa6ksUvbjd8lQZgP%2BC%2BixDge%2FQ9iuQIhAMD5HwfFhg29BlubfwCowL%2BNSvO4FITosI41JKzeSSYWKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNzyln2ZZ2%2B57tdU8q3AO80HNFEHjuT6czMfAxzZQKfkxksaY5dAmj8QxDE%2BSxfcDt4OfAH7u1RlYKYsZfTEeobEoo56aM%2B05ZIaGy3r2o7VeP2eIpEVfnsJ2be7GnGMyLIrP3OylL9nkpNpjuzMnD4w%2B4tfv8itEz%2FlYcp4xWrcLu%2BNj7wkSCPABGRtiaz72yQhjE5eyFSqDPVGdTiSMJypo5wRu4YEs%2FuiSpWQwqPXfaVtUfr%2BMFStkuHNaeOyaKk7RsW%2FRfthdSMPe%2FSJvV9oh5iDof9uIOsu99X7gHFHO%2BgzpXciUR1D3pRonJpbsI5Ua3j4e6ylLFArvHis3b8XQnNexD81DbIkSlyaJqNOQfiK9K3BOCt7b4KAq8t8iCeOTXBFiLnvXc%2BoIMx%2FI2QoWyXsGKaXzWvle0kYBPx%2FMBjbCMx%2BJqff1y8N8F8V9Fr2Z4UD6ks9oTvV%2BgQCmcjouGi7LmyCSPyObN0NhbJj%2B5Bo1SIZZNNQHsEctyecYBEiVpKfYyYpmYmRCv32FWIuMZZTjt164FrkRUtIzVElC%2FYA4SZhbqEz%2FFkyzzH9ejScpYXFezjH83zfVfzuIz20Etycbw33EWp%2FS8it9ScsokO55lo1uYE7G9ewRll60C%2FohWefQBJ6ZXfjCyrozKBjqkAb6bkVIppwHkXgsQUVVIDf6G8XSqLTNhLFDoGjc3%2BSdfm44GQBI4exbyTsN8Klk2N8o6UL50SvIrkDRG%2FOsZ1MGYj915W6gvbvZn9mdxNHYbmoVAuKqYO%2BRMrl6uaFxZh1QeqiPzKuHEzkICp9yeYEbK3Hr2prsfZPXeE6Q3PFtbjlVom3Z0X%2BmWPhbXbeqnumJ5QNxfLBx9gkHSVrAkHjHya2VP&X-Amz-Signature=d5a3c2be2d7a8da6c4f952ee1d47d40335595e86dfc7846fd317a270a4de5aed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

