---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHZE6R2E%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T154416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQOMGYB1Jd7EZsKe%2B%2FhyeUC3KJXGWHdvIWFUlmH653fwIhAPk6fWiSzdHUEMes8deqIASyJnK3BSB0Hjlf4v64EtxKKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAVJMO%2BKa%2FroMkjckq3ANtSaccCRabcoJrVOheyZgEqdugipJ3Z%2FOZSyblKoP9ProP5SIbunHbmWlqqN4nvBGIP%2F0yWviA7rxj2JRv%2FO77u24Rx7jbyOz2UaOEden83JlP7%2BivLfYSb438sprr18swVCq8xOa%2BADQQOqeXUK1ko4C9dZO2srf2lQP0xhitpdMpfGhOe%2FiuaYSaZD8K%2Fqv1V9FJ%2BiFW93MLzVb1aCcRmtY2jRrSDeCfsGTvapVnwu%2FQ1hzmdPlTsBkwH0rDEvjNnrSm1i5THV55Zg3dHRgeJfO7oKmD184lr3gQu3A53k3cRUpqrPhPGhY761UfDbTm5N03h30YEGPk132vgEm6Qt9JbfJSlzW4rAiaQhHZUCeigl5qZ6lYDjfXWdxPzGZF2fmiFou9OMdPLJviA%2FB4peZWOBt6%2Bzt737PneRt4PZOZrIBIzm6yAGUYNtbfFhpEe5gRq4bOgmWYSfaM2FAdgNGyJUvVXnVyNtOmjpKe6F5Y6Hq04OhtA8HuWS1mFc8%2Fjn4tvUvnnbU9FrDuJrshq3z8ZX2sjKDhVXCLYX7qLgEnoNr4RBez%2FGbFpZh1wkZc1ZztuumC88rUsk6JAQiNhYUfj1LlIgWLlfo8uZgjxIw5tVv3Q%2BA%2F3Wu%2BfTCWwtvJBjqkAfwWwCAc6MLu30bms6VbtUAWOiN2VCcqVNN1hzctrmlnyJS0XW9CHIy5tnwOJKmZJYKkZQdn8IGCtNC%2FKJ9h2eO4taOgEJuzYxYZJDr2z9%2FBIPN5ZKJtTSDY2GhtsjMZLBEgvvhktUcGTHB8wh3Iu2zCKpn3XP%2FLRXeL8eGdGnMYKJpAbY6O6DlRYnluJrBLi5PkLS0IHaGKsyLyfe%2BXc1E%2BXpLZ&X-Amz-Signature=6e80eef08a7f9c0efdd2543919def4fe0a52532524a3765b731a141c9350ecdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHZE6R2E%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T154416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQOMGYB1Jd7EZsKe%2B%2FhyeUC3KJXGWHdvIWFUlmH653fwIhAPk6fWiSzdHUEMes8deqIASyJnK3BSB0Hjlf4v64EtxKKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAVJMO%2BKa%2FroMkjckq3ANtSaccCRabcoJrVOheyZgEqdugipJ3Z%2FOZSyblKoP9ProP5SIbunHbmWlqqN4nvBGIP%2F0yWviA7rxj2JRv%2FO77u24Rx7jbyOz2UaOEden83JlP7%2BivLfYSb438sprr18swVCq8xOa%2BADQQOqeXUK1ko4C9dZO2srf2lQP0xhitpdMpfGhOe%2FiuaYSaZD8K%2Fqv1V9FJ%2BiFW93MLzVb1aCcRmtY2jRrSDeCfsGTvapVnwu%2FQ1hzmdPlTsBkwH0rDEvjNnrSm1i5THV55Zg3dHRgeJfO7oKmD184lr3gQu3A53k3cRUpqrPhPGhY761UfDbTm5N03h30YEGPk132vgEm6Qt9JbfJSlzW4rAiaQhHZUCeigl5qZ6lYDjfXWdxPzGZF2fmiFou9OMdPLJviA%2FB4peZWOBt6%2Bzt737PneRt4PZOZrIBIzm6yAGUYNtbfFhpEe5gRq4bOgmWYSfaM2FAdgNGyJUvVXnVyNtOmjpKe6F5Y6Hq04OhtA8HuWS1mFc8%2Fjn4tvUvnnbU9FrDuJrshq3z8ZX2sjKDhVXCLYX7qLgEnoNr4RBez%2FGbFpZh1wkZc1ZztuumC88rUsk6JAQiNhYUfj1LlIgWLlfo8uZgjxIw5tVv3Q%2BA%2F3Wu%2BfTCWwtvJBjqkAfwWwCAc6MLu30bms6VbtUAWOiN2VCcqVNN1hzctrmlnyJS0XW9CHIy5tnwOJKmZJYKkZQdn8IGCtNC%2FKJ9h2eO4taOgEJuzYxYZJDr2z9%2FBIPN5ZKJtTSDY2GhtsjMZLBEgvvhktUcGTHB8wh3Iu2zCKpn3XP%2FLRXeL8eGdGnMYKJpAbY6O6DlRYnluJrBLi5PkLS0IHaGKsyLyfe%2BXc1E%2BXpLZ&X-Amz-Signature=ebef387238cbbffd9b507bbde266e73cdab514304be85321f2734f266abf6858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

