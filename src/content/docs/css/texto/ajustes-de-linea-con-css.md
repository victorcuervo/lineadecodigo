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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7V5ZBD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFp7MuKxX4u8nhpqE8t%2BgUEP%2B1nN%2FqDLJT1KYy9orM2PAiEAttg1XDIEMZEoFTaryb6JVJaqLc8JVXkOvaqF470fxpUq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDD5Y2bgloHz3ZxUorCrcAzwKdNYmWylMSUUbnaQKQn7TXLo11jXh3myvlD9V1Ga2XZ6wDg9fIa4cCDBeDXXx7kGaGZO05FnTXIFb2pRNYgA9ouP0qwwRsnyGW9uKdAz4ON80ASfWzjfnBsiivHBpkcLANchl4ut%2FvSqJm0Q3%2FcVVuAFWPmhBzMdB7Ih0m%2BjvWzIPLqQ5%2FBRmGtqGu%2BvLVKqYvOJ02mN%2BqX9B9CZJUxc41%2BtjqzA4H35MJmUcn4cvI43qBFYLjOIN0nb8vu1tKMtazEpsRD9qotc2MxgAvUsKLRHLrHcF8iDtZi7toZdNyl%2F376rD2tHeDeiADL2wcMMK4sk%2B8UAj9HqYW5Mtlg7OnQJNrSAFaLketfjvbzgoCk8n9FB22T%2FNHfWXyNaBgaxcM8RTa4BcvzhZa%2FCghuUfCup89zoKMJ0QFgS0B5arcy6HUIn26%2BURbuajVA0GeJBTr8IjwCxU0wi0q6PSVCeIPTBOBfQnuZp7ShRDMDc0dPag37JzYyiMXYfuewWsCkvcg%2F1OaSSu5s8NLq2JD1o0eRPthiJKp64Sw3TuQqHZvesnioFgeel%2Fz3EUifkA8lZpdsWRKyzecjWn5639fmIAj6pTSkMmNZbROvV5YALG8ofThnYNSPAncvKtMKfwicoGOqUBgUMWqV9HS%2Fdb%2Fw2u9T57vRssGhIQpu8x%2BpGemhvIeGwXvhvliHQ%2FEO6gg8ZKm4Ajhvr3q%2BzggQCiI00SwbH6JrL4Y91ehwbeq%2F9VvNevzxwH%2BMRz0xhgT8sMwlAB65HjyqFrAfJkGDLbEJfmo6S%2BWp5f%2FeHfzs61Heb5FkSwqDO08wOtWVtlukMboXBIHpUNgXLYVS5KF7X6TFOWFmS5iiuJ5G8C&X-Amz-Signature=c1ecf268cf0128a6f6ecec4bc00bc1e8acd6fae10c6ddfee93c6c78494096aa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7V5ZBD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFp7MuKxX4u8nhpqE8t%2BgUEP%2B1nN%2FqDLJT1KYy9orM2PAiEAttg1XDIEMZEoFTaryb6JVJaqLc8JVXkOvaqF470fxpUq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDD5Y2bgloHz3ZxUorCrcAzwKdNYmWylMSUUbnaQKQn7TXLo11jXh3myvlD9V1Ga2XZ6wDg9fIa4cCDBeDXXx7kGaGZO05FnTXIFb2pRNYgA9ouP0qwwRsnyGW9uKdAz4ON80ASfWzjfnBsiivHBpkcLANchl4ut%2FvSqJm0Q3%2FcVVuAFWPmhBzMdB7Ih0m%2BjvWzIPLqQ5%2FBRmGtqGu%2BvLVKqYvOJ02mN%2BqX9B9CZJUxc41%2BtjqzA4H35MJmUcn4cvI43qBFYLjOIN0nb8vu1tKMtazEpsRD9qotc2MxgAvUsKLRHLrHcF8iDtZi7toZdNyl%2F376rD2tHeDeiADL2wcMMK4sk%2B8UAj9HqYW5Mtlg7OnQJNrSAFaLketfjvbzgoCk8n9FB22T%2FNHfWXyNaBgaxcM8RTa4BcvzhZa%2FCghuUfCup89zoKMJ0QFgS0B5arcy6HUIn26%2BURbuajVA0GeJBTr8IjwCxU0wi0q6PSVCeIPTBOBfQnuZp7ShRDMDc0dPag37JzYyiMXYfuewWsCkvcg%2F1OaSSu5s8NLq2JD1o0eRPthiJKp64Sw3TuQqHZvesnioFgeel%2Fz3EUifkA8lZpdsWRKyzecjWn5639fmIAj6pTSkMmNZbROvV5YALG8ofThnYNSPAncvKtMKfwicoGOqUBgUMWqV9HS%2Fdb%2Fw2u9T57vRssGhIQpu8x%2BpGemhvIeGwXvhvliHQ%2FEO6gg8ZKm4Ajhvr3q%2BzggQCiI00SwbH6JrL4Y91ehwbeq%2F9VvNevzxwH%2BMRz0xhgT8sMwlAB65HjyqFrAfJkGDLbEJfmo6S%2BWp5f%2FeHfzs61Heb5FkSwqDO08wOtWVtlukMboXBIHpUNgXLYVS5KF7X6TFOWFmS5iiuJ5G8C&X-Amz-Signature=eb99acd5c918bfd341c7940f22ab73b161fa3032d21c163b1f4cfbd325566e9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

