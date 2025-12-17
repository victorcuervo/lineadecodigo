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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3H6YKAF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIK2WTaB752pPf3g7UMqAjuyj1WCyrCezZtr0kga4qVAiEAwOrRKEw0CdfZOPlHnGYFgiUdcFdOqC%2FXM%2F5geuOJrlQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDTQf1ZXHD2pnaupiSrcA20zvtbiPw%2BUER2sfZjbm%2BNw%2F%2F0N36T13W6mFZOaM1Np%2Bg6S0eD6KzeqiNFfX1tUrJCFAh4CRo3XKoxM0z0Fw7hWL4alTaSATQItyXi4NZC7YZ6x2PDXyu66%2B1Z30PpkR7GDWfU%2BbI8SQhVbcICaUYQ8cEON0UgX88TyLYfuiBvutN127B5C8z2TYcdkFUffxtqOhmMOHX8gxdDl3b5VegFHKvBj%2FiRQeZYYTc1V%2FOEzdgMCAxqcCZzSjZJ%2Fp9wscO2AXFjWkpG6%2FzC9Nkqf4g%2F3JkKn5PViYtWffPn8rH6VQJ9JsObMVLk6aPpXo8Ca%2BuruImijoqdehEuH1PBQ6%2Bx6tZqYxCnoESt2FqWE8%2BtCLb5Q5u9GDgcUrOBcZDLzzKoscjNKEjQuN5G74hgKf1Omb5Yrf4UrEdwO4QLhx6HkbS%2F2WaX4OjLeRMwI5bHTaSkkUpwcc5FRfOTTetY447uBNM7cCQtA%2B0lDt1cGuj1f3t4sqW8wLAmPQpYMM%2F83ZLkeI5u0HNx4QZFVBKBefJRv4TBfcVf6gs8r75Y72%2B%2F2SgBY361HgfkQFYk6ZZHAxYB5xXZ7qNwb04pR7iDX7FloP%2FVnX2%2BJ%2BiRiKEAol6dHaa3DGCkU8bnopyhPMLaWiMoGOqUBk5GnUF%2FrUSBaxKYB039FsECz%2B6m6NlOetoVWSf%2BvYq9IwZHPIgMr7nRL%2BFtAWkI7cVvxj35xMSxSSTCZ0Zz0wl%2F0acR9bpRg9KKuypOeRd6KHo7x0PVuuSyWZT8GnB4x8Xcto652Bs46D0rd%2FaDwp4KQy0jVjMykrLEc8Kdg075Z8QE5Lwl6tgcHN32WlDgQxYxRFQFjz69n1F75mYC%2BkAzqOZ5Z&X-Amz-Signature=b3aa7350a77fe57343c2581e4088f0b48ba637d575768a6637c8c1bb89a8925d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3H6YKAF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIK2WTaB752pPf3g7UMqAjuyj1WCyrCezZtr0kga4qVAiEAwOrRKEw0CdfZOPlHnGYFgiUdcFdOqC%2FXM%2F5geuOJrlQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDTQf1ZXHD2pnaupiSrcA20zvtbiPw%2BUER2sfZjbm%2BNw%2F%2F0N36T13W6mFZOaM1Np%2Bg6S0eD6KzeqiNFfX1tUrJCFAh4CRo3XKoxM0z0Fw7hWL4alTaSATQItyXi4NZC7YZ6x2PDXyu66%2B1Z30PpkR7GDWfU%2BbI8SQhVbcICaUYQ8cEON0UgX88TyLYfuiBvutN127B5C8z2TYcdkFUffxtqOhmMOHX8gxdDl3b5VegFHKvBj%2FiRQeZYYTc1V%2FOEzdgMCAxqcCZzSjZJ%2Fp9wscO2AXFjWkpG6%2FzC9Nkqf4g%2F3JkKn5PViYtWffPn8rH6VQJ9JsObMVLk6aPpXo8Ca%2BuruImijoqdehEuH1PBQ6%2Bx6tZqYxCnoESt2FqWE8%2BtCLb5Q5u9GDgcUrOBcZDLzzKoscjNKEjQuN5G74hgKf1Omb5Yrf4UrEdwO4QLhx6HkbS%2F2WaX4OjLeRMwI5bHTaSkkUpwcc5FRfOTTetY447uBNM7cCQtA%2B0lDt1cGuj1f3t4sqW8wLAmPQpYMM%2F83ZLkeI5u0HNx4QZFVBKBefJRv4TBfcVf6gs8r75Y72%2B%2F2SgBY361HgfkQFYk6ZZHAxYB5xXZ7qNwb04pR7iDX7FloP%2FVnX2%2BJ%2BiRiKEAol6dHaa3DGCkU8bnopyhPMLaWiMoGOqUBk5GnUF%2FrUSBaxKYB039FsECz%2B6m6NlOetoVWSf%2BvYq9IwZHPIgMr7nRL%2BFtAWkI7cVvxj35xMSxSSTCZ0Zz0wl%2F0acR9bpRg9KKuypOeRd6KHo7x0PVuuSyWZT8GnB4x8Xcto652Bs46D0rd%2FaDwp4KQy0jVjMykrLEc8Kdg075Z8QE5Lwl6tgcHN32WlDgQxYxRFQFjz69n1F75mYC%2BkAzqOZ5Z&X-Amz-Signature=9716c76f1dd0fb79650ece9c0e511e4e4016491438a30cdb618f125604982310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

