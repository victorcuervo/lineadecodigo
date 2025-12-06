---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672XRCPS3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T120400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAKbSvoB36k1443YdEpIiiqogbU0VTkpJShiugRZNlQQIhAMLuzcBNEmOBFLmQB7nhINMMJAHJKtobL0YstcCyu%2B6iKv8DCHUQABoMNjM3NDIzMTgzODA1IgzW0D3m7ShmH2mvsEYq3AMjarFezJAFwYXXPQY9h0Whv7NDtFbgpbvMQVHnS8IsvpClo98XYHJ9erWQnu5gk63a1RZBr2s94l%2BPqMhxfH5qSxT4AsUKyTyUTRT0u%2FbUjrl%2BylYYQPrSJ5IlXcUlmBZE%2BZ31PeRI56sW3E%2FflzxjfEPktcHZQYHkD8%2BUeqHf5DNrZunpFbGjc%2B0XqJZ93PJZfWdaF2dSsOzpbJAP8wjialIPrqVb8wIxPz9t%2BdINcG%2FozrF4pwNmHXK6Gv8th7KXgK8kJ4gByX4W33Xgi9B%2BKba%2Fu9axC3HD4N9m%2B99JKIXQlJvzm9R0RJ24QM9SOzqggk3JVLePceCad0yrYxK1iGiHPE81ZAfXSDBHBzyjO7fh9fgacjatci7EDHQJkNuMyVVmU6OBqi%2FdcQli3Orgfa%2BAoGkKSDXunNhma1IdgFwNHY%2B87ng6fOV%2B6sIYlNrAqOrRAJseZftjfuxgoylvP9I3L9GAIWv77JwL86FuAUf48n%2FsLzQx8M%2Ft1tT5RjVP9Fe0vVtTtjyaBJI2ZHsKi5eZDz3nzDM09EDzF68szv4Z3fds37rgZlb79vESfIEq791h5HCK0MYl%2FTS7sU%2FIu3yVmRUNIFxSux9kZgHrkhTTotI4%2FDkgcol6UjDMptDJBjqkAUxOVGcNcvzySGve8PPkBDYpnkwVU5XCC68F%2BMbehGDJyrvwhc0IGXsJB9HdGQ%2FPLDJVnm1s3R8PjGDz12OknebCvK2iiNtrHPnh3siZrVM77PerxTmg68KUT4BgzkXWy7XNMZeKXL2LwAy7xoXnjbEF1h268UQGKhTupFPFCw1il%2FelIUcoTllx7XfxiwwbJV3xTQT01hUeaSQfaQ8oZ9epynfc&X-Amz-Signature=754bdd7358b202fff506142f2e4ddd9293fafe912e41ee4fe74f656760c39779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672XRCPS3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T120400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAKbSvoB36k1443YdEpIiiqogbU0VTkpJShiugRZNlQQIhAMLuzcBNEmOBFLmQB7nhINMMJAHJKtobL0YstcCyu%2B6iKv8DCHUQABoMNjM3NDIzMTgzODA1IgzW0D3m7ShmH2mvsEYq3AMjarFezJAFwYXXPQY9h0Whv7NDtFbgpbvMQVHnS8IsvpClo98XYHJ9erWQnu5gk63a1RZBr2s94l%2BPqMhxfH5qSxT4AsUKyTyUTRT0u%2FbUjrl%2BylYYQPrSJ5IlXcUlmBZE%2BZ31PeRI56sW3E%2FflzxjfEPktcHZQYHkD8%2BUeqHf5DNrZunpFbGjc%2B0XqJZ93PJZfWdaF2dSsOzpbJAP8wjialIPrqVb8wIxPz9t%2BdINcG%2FozrF4pwNmHXK6Gv8th7KXgK8kJ4gByX4W33Xgi9B%2BKba%2Fu9axC3HD4N9m%2B99JKIXQlJvzm9R0RJ24QM9SOzqggk3JVLePceCad0yrYxK1iGiHPE81ZAfXSDBHBzyjO7fh9fgacjatci7EDHQJkNuMyVVmU6OBqi%2FdcQli3Orgfa%2BAoGkKSDXunNhma1IdgFwNHY%2B87ng6fOV%2B6sIYlNrAqOrRAJseZftjfuxgoylvP9I3L9GAIWv77JwL86FuAUf48n%2FsLzQx8M%2Ft1tT5RjVP9Fe0vVtTtjyaBJI2ZHsKi5eZDz3nzDM09EDzF68szv4Z3fds37rgZlb79vESfIEq791h5HCK0MYl%2FTS7sU%2FIu3yVmRUNIFxSux9kZgHrkhTTotI4%2FDkgcol6UjDMptDJBjqkAUxOVGcNcvzySGve8PPkBDYpnkwVU5XCC68F%2BMbehGDJyrvwhc0IGXsJB9HdGQ%2FPLDJVnm1s3R8PjGDz12OknebCvK2iiNtrHPnh3siZrVM77PerxTmg68KUT4BgzkXWy7XNMZeKXL2LwAy7xoXnjbEF1h268UQGKhTupFPFCw1il%2FelIUcoTllx7XfxiwwbJV3xTQT01hUeaSQfaQ8oZ9epynfc&X-Amz-Signature=fee6bed03fa44e46e30685b5434da735645494c44768a97ff7b28601b23f6f39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

