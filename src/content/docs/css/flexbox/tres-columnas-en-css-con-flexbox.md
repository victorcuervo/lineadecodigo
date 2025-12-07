---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GAV6VPH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnSggO1f7%2Fds58E54x9YMlOr%2F2IZXP1fxudCGO%2Fl0kuAiEA0fzF11opEDHfzOh1Y5JdJWxTK%2FGz1o78zNj2bGsVn5cqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE45LV6pPQKWTtARiyrcA43MZXc7cCTKIo3PWxXjqmDqRLOkgeNyYwomj34DdtjLWKt%2FuEhiDY30zqr8tLPSeJdu10D36fKJPKx5SBeE0CgSCr9HfV5mSYdF3ZSlJeAt5hPZu0a40rxt8SQeEU46h44UM%2BY6AOQD%2BJYNbC8%2Fa5DPNBDpAyWETBt4kM1zG%2FJOovinVyNfIg%2BpU0l1wcGpq86l6h767ZQeET0m%2BA8R15xL0594si5TwHQXP4ZlPLuiPJyGy2MozXbnbyCtseEJmMnYJ3GfFJbqZ7mdHkt%2F8V6Ap2ge6c6g67mW5on9VtFEnxcJvHjletJiRR%2BA2BHXqZFd9JWsq7eI%2B%2FuChUG8VUEw2x9q2sFyJYtovbDFE%2FZ5MMkk6uBgBrgv5UHhG0H4C3AjaSk8akDrspzLl2W0x8oEJEs4iZs6Z46fVXJxi8pow1fnFcfwtjmjSJX0aBDATm%2B4dm89sUizxrJH6Rk1fJ4ZsNRZV2i2MH6dShjAZS98zcJoMzQ%2B6jXIS51BRUPls6HtffWF55o7nR5D4LHZN12cupybhgYBNM9JiAoLi3iJJMHqt7Sy4fK6PI3ThZX2JYHB6rpRHq6mKj%2FW66TqG0%2B4%2BZFJpEeAL5z2uY0RlY9n9%2Fx%2FtgYUFk7MYaLqMJr90skGOqUBKPfFfSyPKBRX5vs%2FoFS8ydYUNvaph7KRaKkcfZAZTFnTDsvPQHExSCS9xewljJwBvokA0tXpWYCjlr9siGvL%2B7XMUQNN7wByUv763ZdC%2Fp28yA2ZHoE6oVgwKs%2F4CPIEbKXjnKSMVe%2F8owqSnUAjWbPtNEq7%2Fz3dfig5S5JOfsgWKLlF7xbsQNmZOu91EXTTx8vDgQBpgiYntzl5pnl96FPIP2ch&X-Amz-Signature=6e764b8372c5a8833b18aaa5ee272e42d06246a236312ec759291c08d9d11449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GAV6VPH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnSggO1f7%2Fds58E54x9YMlOr%2F2IZXP1fxudCGO%2Fl0kuAiEA0fzF11opEDHfzOh1Y5JdJWxTK%2FGz1o78zNj2bGsVn5cqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE45LV6pPQKWTtARiyrcA43MZXc7cCTKIo3PWxXjqmDqRLOkgeNyYwomj34DdtjLWKt%2FuEhiDY30zqr8tLPSeJdu10D36fKJPKx5SBeE0CgSCr9HfV5mSYdF3ZSlJeAt5hPZu0a40rxt8SQeEU46h44UM%2BY6AOQD%2BJYNbC8%2Fa5DPNBDpAyWETBt4kM1zG%2FJOovinVyNfIg%2BpU0l1wcGpq86l6h767ZQeET0m%2BA8R15xL0594si5TwHQXP4ZlPLuiPJyGy2MozXbnbyCtseEJmMnYJ3GfFJbqZ7mdHkt%2F8V6Ap2ge6c6g67mW5on9VtFEnxcJvHjletJiRR%2BA2BHXqZFd9JWsq7eI%2B%2FuChUG8VUEw2x9q2sFyJYtovbDFE%2FZ5MMkk6uBgBrgv5UHhG0H4C3AjaSk8akDrspzLl2W0x8oEJEs4iZs6Z46fVXJxi8pow1fnFcfwtjmjSJX0aBDATm%2B4dm89sUizxrJH6Rk1fJ4ZsNRZV2i2MH6dShjAZS98zcJoMzQ%2B6jXIS51BRUPls6HtffWF55o7nR5D4LHZN12cupybhgYBNM9JiAoLi3iJJMHqt7Sy4fK6PI3ThZX2JYHB6rpRHq6mKj%2FW66TqG0%2B4%2BZFJpEeAL5z2uY0RlY9n9%2Fx%2FtgYUFk7MYaLqMJr90skGOqUBKPfFfSyPKBRX5vs%2FoFS8ydYUNvaph7KRaKkcfZAZTFnTDsvPQHExSCS9xewljJwBvokA0tXpWYCjlr9siGvL%2B7XMUQNN7wByUv763ZdC%2Fp28yA2ZHoE6oVgwKs%2F4CPIEbKXjnKSMVe%2F8owqSnUAjWbPtNEq7%2Fz3dfig5S5JOfsgWKLlF7xbsQNmZOu91EXTTx8vDgQBpgiYntzl5pnl96FPIP2ch&X-Amz-Signature=b1609835100e8976408a44c091bfb00fd354a3ec047399967ec41c23d62bf7ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

