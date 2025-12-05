---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TUBBMCI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T003025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLIB1wknMl8LNZ0ae5fw7TSygE1eR37kYadPNAOW6uIAiAWgcbVKHJ8f7pmfRSvaCkkodgmDwu8vkD2YeThc1zi8Cr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMYLG5lOvuv%2BWffQdhKtwDIT718YdskB2N58FPkMtIZxH8Ni5iMn3K3SEJXmCken0vS%2BeXpwFD%2BGZt9%2FvZuZF7NGfBBlrMATuNJVtj7zSbvYHI681j2Np6Dl0tTvvblSvLrtncEy%2BkrsRyzUUV08xdUAN1bnsBxajatVfivHEX%2FrvtO9RFtlTjgdFK4j2Xn8eMg1KegH%2BWjNZMbKNCrjSeZOAJR6TVqaz2d%2FYYt7mlJ46sfR24gC8IVvK%2BKw8kMGvEFcfRYdMkIwu811Bb%2FOF5bsHnIujK4fOKdZcRAi2l1561RTnWQvcrzCl4J5ZbW6HEhQDGv8VzIetmzjgqAqCYzpkkgo7rcGBELXmV0XhuzJOn%2BzHx9zbTul7JjG62AeldPH0laaVN%2BFlISHwE2kkyUwTD%2B99D0XiJfnoVqXEajTkbGXSQrWtwLZXy4BCLCAZANbjx9OsrQo77wUvGCAizp%2FErT92EAMDNYLUwsmxAszv4IGyvE5OggF28ZAkgtea2cT%2FjX9fktYaKwMcm5QEhM2nMaPWIGqJ5Jny6Y5nxsHhfg8X13%2F7YnJY%2F5PQUGPerFosznkpFJNnLqcJIFZoSTLYKJXPUyWYRjvGNMCnv4EIj%2BHsK4xOp4OXB8CVDrL%2FIw0Hzi5VbF%2B7tPcwwg4vIyQY6pgF%2FpcJ20M7x3SajgzqUKY7qwO53pvJHmyUTBLhZ6KGycSeI0my9r89WBYDnuzOmyKjjmtC0ZDjAXSnzIaWxZ318VtF5k1x3powYFhv%2BaMvBoifKUvX%2F%2Bjr2jGDRWPo998jbVg3to3A9eEp73FM4Ts1L2V1l9Fma5o1gNLmoeloZgGN8aGTNHbj9UqYTCIuirJAktNOk2FGMEzcttzDeAQLxQ3GVtXhA&X-Amz-Signature=5e4614ff061be33a84772614b53db9f13aa09b62ec814aa61d2cd9a2cd1d3ae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TUBBMCI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T003025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLIB1wknMl8LNZ0ae5fw7TSygE1eR37kYadPNAOW6uIAiAWgcbVKHJ8f7pmfRSvaCkkodgmDwu8vkD2YeThc1zi8Cr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMYLG5lOvuv%2BWffQdhKtwDIT718YdskB2N58FPkMtIZxH8Ni5iMn3K3SEJXmCken0vS%2BeXpwFD%2BGZt9%2FvZuZF7NGfBBlrMATuNJVtj7zSbvYHI681j2Np6Dl0tTvvblSvLrtncEy%2BkrsRyzUUV08xdUAN1bnsBxajatVfivHEX%2FrvtO9RFtlTjgdFK4j2Xn8eMg1KegH%2BWjNZMbKNCrjSeZOAJR6TVqaz2d%2FYYt7mlJ46sfR24gC8IVvK%2BKw8kMGvEFcfRYdMkIwu811Bb%2FOF5bsHnIujK4fOKdZcRAi2l1561RTnWQvcrzCl4J5ZbW6HEhQDGv8VzIetmzjgqAqCYzpkkgo7rcGBELXmV0XhuzJOn%2BzHx9zbTul7JjG62AeldPH0laaVN%2BFlISHwE2kkyUwTD%2B99D0XiJfnoVqXEajTkbGXSQrWtwLZXy4BCLCAZANbjx9OsrQo77wUvGCAizp%2FErT92EAMDNYLUwsmxAszv4IGyvE5OggF28ZAkgtea2cT%2FjX9fktYaKwMcm5QEhM2nMaPWIGqJ5Jny6Y5nxsHhfg8X13%2F7YnJY%2F5PQUGPerFosznkpFJNnLqcJIFZoSTLYKJXPUyWYRjvGNMCnv4EIj%2BHsK4xOp4OXB8CVDrL%2FIw0Hzi5VbF%2B7tPcwwg4vIyQY6pgF%2FpcJ20M7x3SajgzqUKY7qwO53pvJHmyUTBLhZ6KGycSeI0my9r89WBYDnuzOmyKjjmtC0ZDjAXSnzIaWxZ318VtF5k1x3powYFhv%2BaMvBoifKUvX%2F%2Bjr2jGDRWPo998jbVg3to3A9eEp73FM4Ts1L2V1l9Fma5o1gNLmoeloZgGN8aGTNHbj9UqYTCIuirJAktNOk2FGMEzcttzDeAQLxQ3GVtXhA&X-Amz-Signature=873b95a49d4c571c91c4d58b0733f3c79025cded23f777fc2ae413d5cb4ba5d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

