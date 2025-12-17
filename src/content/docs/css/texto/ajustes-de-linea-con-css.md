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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WABCMYXK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQxsgYvhayK1ynmEhHs3SVBe25yAxFV24jzJYKtcsuFAiB5bGGe09QHmDag1W8vkWHIMNyu3qSvQJBWZS%2FbHeUUayr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMLCpwLv%2Ffi7lVix79KtwDRUv8udnp4m2rqAlU4c05p5IlosRk3731KezqoHOqZOIn7vQbLF27J%2FTj2ka%2F5oN7%2BAIdBBAseFJFf8flacHaP7gy0N2JRjqnaWEBq5v%2FRZxCXnt8G%2Fy5Gu5dINMjwQrzyVvi1Y75sCU5zC68wL989dVXm6YpGtBRIA8bnZ%2FkuhkIc%2FWaCMPKiGGIPtGd7PmsEz%2FeGaiAGSCVdV5L6zmFQip6ofoSZi2y2Q8cpQfwYre0WEHmW%2B0tb8ohHsfFqNIvqw17avW%2FH6w66msHE%2Fn2u%2FsSnarxAk0ajgSWOngkSOWxU2U9EtDv802OHVKyN%2BDoxaQ32o04GsWct5T40ptXOEG4TTmYLayz5F1Ijl8elHNrJzsm9t7vLWxGL1E1gevvUAGSpRB9AxencfcHDSKWgQLd3zRVaHo2W5pKXYbpInDkxW2ZVp0lVPu4yj3LiBGm8qA359YS20Q2Af9AS0ADSPFi1sWnwajrZYboyleZBaWsn%2F0K7v8H8iKJejcVi2W%2FnmWNhpqDXbOQvqwNtAfP87L7oy7zyZylxpksi%2BmsrMk44InSvgvmGjACtPlqwHMB9WqYB2mY6EvZs7ySU6aa5dDvpp5Q0mh1UjWPixngO%2BZobWdYZqwzGsaXqwcwwI%2BKygY6pgHqmeDcKha9RboKj3N8nOdE%2FSYvBC4x1RFkXuDFMX2fimKwAT0KQa5%2BtvBXrzQqDdpFJ76gYfTC6HGSlaPNGhyN%2BZOG7j8lSB7tVaeZKEAVFG5aPUC%2BetkHIOOtrVDUhw703GGYT5oeDd%2BNXnoqPI3LZi6e01irDfpmv3x9ZqYwkWeSzQW3nvVezJuoo0sU3URNx1ThuYkD4z54bwLKIjKlJzHoRY3N&X-Amz-Signature=2d6775c2cbfea09d4092b332e82725e191d4aadfafd2df0824f68d404ce87ad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WABCMYXK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQxsgYvhayK1ynmEhHs3SVBe25yAxFV24jzJYKtcsuFAiB5bGGe09QHmDag1W8vkWHIMNyu3qSvQJBWZS%2FbHeUUayr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMLCpwLv%2Ffi7lVix79KtwDRUv8udnp4m2rqAlU4c05p5IlosRk3731KezqoHOqZOIn7vQbLF27J%2FTj2ka%2F5oN7%2BAIdBBAseFJFf8flacHaP7gy0N2JRjqnaWEBq5v%2FRZxCXnt8G%2Fy5Gu5dINMjwQrzyVvi1Y75sCU5zC68wL989dVXm6YpGtBRIA8bnZ%2FkuhkIc%2FWaCMPKiGGIPtGd7PmsEz%2FeGaiAGSCVdV5L6zmFQip6ofoSZi2y2Q8cpQfwYre0WEHmW%2B0tb8ohHsfFqNIvqw17avW%2FH6w66msHE%2Fn2u%2FsSnarxAk0ajgSWOngkSOWxU2U9EtDv802OHVKyN%2BDoxaQ32o04GsWct5T40ptXOEG4TTmYLayz5F1Ijl8elHNrJzsm9t7vLWxGL1E1gevvUAGSpRB9AxencfcHDSKWgQLd3zRVaHo2W5pKXYbpInDkxW2ZVp0lVPu4yj3LiBGm8qA359YS20Q2Af9AS0ADSPFi1sWnwajrZYboyleZBaWsn%2F0K7v8H8iKJejcVi2W%2FnmWNhpqDXbOQvqwNtAfP87L7oy7zyZylxpksi%2BmsrMk44InSvgvmGjACtPlqwHMB9WqYB2mY6EvZs7ySU6aa5dDvpp5Q0mh1UjWPixngO%2BZobWdYZqwzGsaXqwcwwI%2BKygY6pgHqmeDcKha9RboKj3N8nOdE%2FSYvBC4x1RFkXuDFMX2fimKwAT0KQa5%2BtvBXrzQqDdpFJ76gYfTC6HGSlaPNGhyN%2BZOG7j8lSB7tVaeZKEAVFG5aPUC%2BetkHIOOtrVDUhw703GGYT5oeDd%2BNXnoqPI3LZi6e01irDfpmv3x9ZqYwkWeSzQW3nvVezJuoo0sU3URNx1ThuYkD4z54bwLKIjKlJzHoRY3N&X-Amz-Signature=ddbfa3764977abcd06d19d448a5a2dea4bdc3533d4e3a6c723db334d1cab1217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

