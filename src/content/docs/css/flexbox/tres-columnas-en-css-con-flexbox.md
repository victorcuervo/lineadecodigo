---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2A4JTIW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFR2IZ8AhGT3u%2F%2B1sh3iNMhNdstzUGWTC4pNxJOzi6IbAiEA1rfocJQGFbGTiqKOtgpycjjEsZcagu7Y979OicoKlW4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDI3vclRDcwWsSjC9SCrcAxY9hiWZ%2FzkR9P%2BfOkFROiIT35JhJsbiTFwxuShAuzOA%2BNa9exCVOQXmxh0EKIdZ6xOnp07Azh2%2B0W4JQDaD3ijFQgIEssVekOANpJrNoCkOxjpswGAEhjLQmj%2B9ZaeTpFohdi37iWPbgRzocUEo7GtRp%2BIfV8SdpY4YqfJKYy9VTDJTnTAsEypnqh2nkbmvOcOERfcvfdbKVO11UqFiu%2BY3SMa5hdDVtj4SnBYgBBGuC7JSDrnS8NZJiGzONiO5dklHfFH7xZX9PfcXxoAvt5xYvBjjhOfEZuyXlY1XopZEjJ3cT7Tr8c%2F2NkAah8Fu2aaOJm%2F3zTgH0fuyTOim%2BNI1jNyPK7MKu9zvIPfo2VPsQrnTwcqqPBAri3WMhA3yrBaOnodwQE1keG6dAv68GAXwQaHEZEYOmDowrUJSCcQKP3FYlf66b2Hrd2ZFdm93afmKMf3TbG4rSVoEWRbjOGoZn%2BzoGGkP5YBzIPKJYXbZU1QyZ9KxjASyaKI9NIL0LzUwViib8c6iAQ%2FMpap9zSrsQ8gfhNDGJpmbuuWUronSjenQqReJuxfCuHyetXY6ZguASu0oSLSKHv7hcHDpV3b%2BfiJzxLXxVN97zyLp75whuY9DR1KQ9nRAxMIOMNaez8kGOqUBOIjz6AjjBxD6N%2F%2Bk%2BUCkcDNXKW0jDE12CT38sn8VbHsbPHRPbfbeAQ%2BGMpdEE%2B5ayzGd5R8flz%2FqmtUoL1M8y3k8lJFVw6M4uV9KAfPv3Oo7rbHTUPkwAY%2FjyBWJyyN0j2NjtAwdiRb%2FYQ9VDgTAhRgM1BG4LpYfdWX7LNSd2d%2Fw6T%2F5rnljhLMMDikp%2Fk9gNoXKjj9HLwx%2B4DDYAUb6IX8qFtKP&X-Amz-Signature=805fe27fa029e173da09ee1c269aea7e33c45d7b8153461b7f46d64abf6b7437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2A4JTIW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFR2IZ8AhGT3u%2F%2B1sh3iNMhNdstzUGWTC4pNxJOzi6IbAiEA1rfocJQGFbGTiqKOtgpycjjEsZcagu7Y979OicoKlW4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDI3vclRDcwWsSjC9SCrcAxY9hiWZ%2FzkR9P%2BfOkFROiIT35JhJsbiTFwxuShAuzOA%2BNa9exCVOQXmxh0EKIdZ6xOnp07Azh2%2B0W4JQDaD3ijFQgIEssVekOANpJrNoCkOxjpswGAEhjLQmj%2B9ZaeTpFohdi37iWPbgRzocUEo7GtRp%2BIfV8SdpY4YqfJKYy9VTDJTnTAsEypnqh2nkbmvOcOERfcvfdbKVO11UqFiu%2BY3SMa5hdDVtj4SnBYgBBGuC7JSDrnS8NZJiGzONiO5dklHfFH7xZX9PfcXxoAvt5xYvBjjhOfEZuyXlY1XopZEjJ3cT7Tr8c%2F2NkAah8Fu2aaOJm%2F3zTgH0fuyTOim%2BNI1jNyPK7MKu9zvIPfo2VPsQrnTwcqqPBAri3WMhA3yrBaOnodwQE1keG6dAv68GAXwQaHEZEYOmDowrUJSCcQKP3FYlf66b2Hrd2ZFdm93afmKMf3TbG4rSVoEWRbjOGoZn%2BzoGGkP5YBzIPKJYXbZU1QyZ9KxjASyaKI9NIL0LzUwViib8c6iAQ%2FMpap9zSrsQ8gfhNDGJpmbuuWUronSjenQqReJuxfCuHyetXY6ZguASu0oSLSKHv7hcHDpV3b%2BfiJzxLXxVN97zyLp75whuY9DR1KQ9nRAxMIOMNaez8kGOqUBOIjz6AjjBxD6N%2F%2Bk%2BUCkcDNXKW0jDE12CT38sn8VbHsbPHRPbfbeAQ%2BGMpdEE%2B5ayzGd5R8flz%2FqmtUoL1M8y3k8lJFVw6M4uV9KAfPv3Oo7rbHTUPkwAY%2FjyBWJyyN0j2NjtAwdiRb%2FYQ9VDgTAhRgM1BG4LpYfdWX7LNSd2d%2Fw6T%2F5rnljhLMMDikp%2Fk9gNoXKjj9HLwx%2B4DDYAUb6IX8qFtKP&X-Amz-Signature=1148321d8d4dadf208e4acc13e4bb344298fd2ddad9926225a40630d411a6887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

