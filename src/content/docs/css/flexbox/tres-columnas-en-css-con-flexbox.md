---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAERNP6Q%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpt1wNRlewroUvPBZcqeUU22nmRDRR9dSRJ4%2FQrsGESgIgeRCMqPaSxzvJ4VPneH600AppFsiwyk%2F4zUY7HJQeenQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDImSXmmPtSbnrXu36CrcA6Yg%2Ft%2FUxWqDUgbmBkDId8rTwm5ovyvVZp8F4Us6mlL8N%2BZTqk6DVRXDC5GE7V%2BYzNjP2POkpNSlmGEDlBndcmjb9Z0ft87rsUEs64%2FiJRKxHsve8XLkNxPrHpgspZYU1L7q11%2BveDqKZTu7h4Kphet%2FdapNtvUV0kSkiwcamQDToRclHgQFGYM0DZ5%2Bvvoy543zYXqYQ%2BfxAPUJLM6fEFoRL%2F48bUHXZtaBzOJ33BeAld%2Bxg9pu5G9IM%2FavmxYGcsUM4pe1rikdQGUa9rz635unUF1KJX1H2CkhkTVM9F9chS9Iux7uEUtZzUB1g4LLpyU1kTRKRsg2AXKSGCol%2FVFNCG%2Be4PxNkW1wp1WB4G6m5VFc3aiMageHkxjhu52CzLs307%2B55xseC6UHYz8ZKgq9qc%2BSwJ6F46a4ZYrQ68IqAu5fjFY00jz6bdeyq6Fm5OUmtEbsTHZ6sfICmEZdWFjsxOY4rHiiyW2jXKVLsnb30T9n8r6c%2FmXpW1A7SuU6WbQzN0BQYdFBCbgXWQfIhDEQWm8dXaRTVdmccso2h4Nnw3LrjctaHgA4RejQcju91wBLl%2BkGbPLA5FUa7G2Yfo41uw3Jb%2BV81BY4SkfxGYpeDdJVNAUd6MwOM6iqMKDezskGOqUBkYgcEzXfJbZB%2Fkn9alBXpO%2F3MLgEOOTgJ%2F%2B%2Bmt8BNfZ1KPstoRYvyKXsEY3%2FX58lAPFcX0AaClMFdFzdJuQxKONF9EDq7mjREh4v1k0yYb0CeAS28kqxQlqh9RTVQzTJnHgCF%2BbqyiUMEVVmh5WCibV42yO3He7mtjTxMChHGM%2FVgpWmJUT%2F%2Bnp5KzUtIKDVJUMSa54SjVd5tFdlr1Mi7FrUT%2F77&X-Amz-Signature=23d7aa0886ccc1589f996cd3679a5309bd88936def95a162118cffa954fd6276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAERNP6Q%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpt1wNRlewroUvPBZcqeUU22nmRDRR9dSRJ4%2FQrsGESgIgeRCMqPaSxzvJ4VPneH600AppFsiwyk%2F4zUY7HJQeenQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDImSXmmPtSbnrXu36CrcA6Yg%2Ft%2FUxWqDUgbmBkDId8rTwm5ovyvVZp8F4Us6mlL8N%2BZTqk6DVRXDC5GE7V%2BYzNjP2POkpNSlmGEDlBndcmjb9Z0ft87rsUEs64%2FiJRKxHsve8XLkNxPrHpgspZYU1L7q11%2BveDqKZTu7h4Kphet%2FdapNtvUV0kSkiwcamQDToRclHgQFGYM0DZ5%2Bvvoy543zYXqYQ%2BfxAPUJLM6fEFoRL%2F48bUHXZtaBzOJ33BeAld%2Bxg9pu5G9IM%2FavmxYGcsUM4pe1rikdQGUa9rz635unUF1KJX1H2CkhkTVM9F9chS9Iux7uEUtZzUB1g4LLpyU1kTRKRsg2AXKSGCol%2FVFNCG%2Be4PxNkW1wp1WB4G6m5VFc3aiMageHkxjhu52CzLs307%2B55xseC6UHYz8ZKgq9qc%2BSwJ6F46a4ZYrQ68IqAu5fjFY00jz6bdeyq6Fm5OUmtEbsTHZ6sfICmEZdWFjsxOY4rHiiyW2jXKVLsnb30T9n8r6c%2FmXpW1A7SuU6WbQzN0BQYdFBCbgXWQfIhDEQWm8dXaRTVdmccso2h4Nnw3LrjctaHgA4RejQcju91wBLl%2BkGbPLA5FUa7G2Yfo41uw3Jb%2BV81BY4SkfxGYpeDdJVNAUd6MwOM6iqMKDezskGOqUBkYgcEzXfJbZB%2Fkn9alBXpO%2F3MLgEOOTgJ%2F%2B%2Bmt8BNfZ1KPstoRYvyKXsEY3%2FX58lAPFcX0AaClMFdFzdJuQxKONF9EDq7mjREh4v1k0yYb0CeAS28kqxQlqh9RTVQzTJnHgCF%2BbqyiUMEVVmh5WCibV42yO3He7mtjTxMChHGM%2FVgpWmJUT%2F%2Bnp5KzUtIKDVJUMSa54SjVd5tFdlr1Mi7FrUT%2F77&X-Amz-Signature=505c9a52c29d05a428e9be496a5a3bada4d8af192d4fe97984efd197292e1d41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

