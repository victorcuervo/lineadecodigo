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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCYS6F2K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEUIPgZ2d7mNHyQn2d%2BcuCPn1djyxPZN10RI2Dw%2Br4hAiBdoXcfUdPyN30g%2FL2OJTIebwL5vjlUs4XOH%2B6vTjX3OCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMEMMXnqiw9RqY8fRVKtwD%2BdMuNmzVpk2h6DelF1O3VqM5c4%2FnWwoPldh6tQKqhNVDXPhMgONk9NrnrzPb4cRNwegUSTAVDC%2BIX6fZj%2BXY5HFSVa7BjZHuaT2tPeGW9CVIGvQROBOeSKWM4Bh8y1UT5ZDhtBOJAzdPk4kT2tcpPhVRAEVt2J0h%2BnPZw5RyGWA%2FQ207%2FmJnkK9TXKa3Z90bSEzA4QiEcXDgCppdDbMzV7i05AddF1NE0j2nGd78P7V%2FwMEeYz4vMVgngBTJWEfJ8Ccibkft6wmLeraAdmeTIy4wgyzW822KsJQ4A85G4lp2Qb72eosQSULyo072yTrrefea89yrvDgU4Qx8kPPQPfp%2BWyPYOONFBDggYg6KWiNSTn%2BFDBCf7TuD5m58Wap%2FMZQosUjD%2BRLgOrxY3VQGFWxKIp0Srx3fEoPZ96WbLZlon%2B6BXS0izmwf0ZbY8X5F3MyJN2JkMf2SggpzdnnYxQYdHOhFwsKy%2B4cPFZCVGV1NqlB2dmHvjGvf0Webac8obv%2BaT7EtIDX9gZwfQ6jMSFatkoQYWwrIQZnDsiS9lOcLk%2FYVqjKr%2BaL0AW6SMWVDJ7NSLTOBi4AxSMpK0dgrjw6Xl3a4YBkniWd1bIWR7dKSuLQz%2BPeAzHbxMGMwgdGJygY6pgGdCyCR38%2B%2FsMMdnl33icAV0X51PMs3JSsFylCg%2Bctrm4diHmseTb2UZWi39DDL9ORo8fquAsYusnEI1zGATAVz3qouNHv6hgIvAaZmVEvveQy0muDTMYmAg2ONiVTFSc0sXUVJUBXVdr5uJuooEvAngBDzToAQY3b5ddCRndYN2vZeOlWomkZENFi%2B3GsZgfD7QvHCikf877ytCgFDcCiTGE5gNfBx&X-Amz-Signature=495aaf2bb646b3bc0a024c6616967aab30d4f4eec07fc3ce0b96758ce81f4806&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCYS6F2K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEUIPgZ2d7mNHyQn2d%2BcuCPn1djyxPZN10RI2Dw%2Br4hAiBdoXcfUdPyN30g%2FL2OJTIebwL5vjlUs4XOH%2B6vTjX3OCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMEMMXnqiw9RqY8fRVKtwD%2BdMuNmzVpk2h6DelF1O3VqM5c4%2FnWwoPldh6tQKqhNVDXPhMgONk9NrnrzPb4cRNwegUSTAVDC%2BIX6fZj%2BXY5HFSVa7BjZHuaT2tPeGW9CVIGvQROBOeSKWM4Bh8y1UT5ZDhtBOJAzdPk4kT2tcpPhVRAEVt2J0h%2BnPZw5RyGWA%2FQ207%2FmJnkK9TXKa3Z90bSEzA4QiEcXDgCppdDbMzV7i05AddF1NE0j2nGd78P7V%2FwMEeYz4vMVgngBTJWEfJ8Ccibkft6wmLeraAdmeTIy4wgyzW822KsJQ4A85G4lp2Qb72eosQSULyo072yTrrefea89yrvDgU4Qx8kPPQPfp%2BWyPYOONFBDggYg6KWiNSTn%2BFDBCf7TuD5m58Wap%2FMZQosUjD%2BRLgOrxY3VQGFWxKIp0Srx3fEoPZ96WbLZlon%2B6BXS0izmwf0ZbY8X5F3MyJN2JkMf2SggpzdnnYxQYdHOhFwsKy%2B4cPFZCVGV1NqlB2dmHvjGvf0Webac8obv%2BaT7EtIDX9gZwfQ6jMSFatkoQYWwrIQZnDsiS9lOcLk%2FYVqjKr%2BaL0AW6SMWVDJ7NSLTOBi4AxSMpK0dgrjw6Xl3a4YBkniWd1bIWR7dKSuLQz%2BPeAzHbxMGMwgdGJygY6pgGdCyCR38%2B%2FsMMdnl33icAV0X51PMs3JSsFylCg%2Bctrm4diHmseTb2UZWi39DDL9ORo8fquAsYusnEI1zGATAVz3qouNHv6hgIvAaZmVEvveQy0muDTMYmAg2ONiVTFSc0sXUVJUBXVdr5uJuooEvAngBDzToAQY3b5ddCRndYN2vZeOlWomkZENFi%2B3GsZgfD7QvHCikf877ytCgFDcCiTGE5gNfBx&X-Amz-Signature=86f18d5e839a67c02ca84b35fa927ecacceedd1b396ee6ae6a4341b86ab5febb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

