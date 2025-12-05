---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655AYIVNM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T123749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BjDu5QBfOIYKN6TAbNRV6YIL%2FgTXUZUcNvqHghGa%2FuwIgJMEsTLX5Be6Q%2BhLjM%2FQGm%2FwfMrFN6R8KXd2e0go%2F9YAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPbNkNAajiQao%2F1FVircAw78Nr5VsbyTmzGis2Sp1jH3HvwAnWGDG1epyDMm57DAc4jahEjbo54vJzAnHc%2BXiJOxPlGNlrKN%2FyUROG5F4ZS68SPa3UrolAzHUnErR8dEK8zz%2F1VqbERqaqy0EzblPjGX4WYHsfA5P0wCHGyUCZgquCvlLySMy8%2FT0epl%2BF29BK%2BKvxSIV2KQDoLQvKmYfgv2D7r3OSw1z%2F1HwylEr5c1fF9NTAIVRcaM3%2F8H0pUURrCrGWbJY04F6eyv2RPh7kiKVAHC9ai7mQyAPumGF4DvHAB9RF7eU1H0JgiP27KCOImakg%2Fw%2Bfs%2BGagt5ToG%2B%2FzkxtHUd%2B4oi73qi3rysuX6xvevCzP37oNT9quIDIgQw7Q2W0aUoHMZfXSEZ4LHRasiK0CgOQx6DCMxEyIVYG%2Fvbv9K1gGDQaU%2FPVmsGuQyqgqvgqHmVJ%2BL9a%2BzsnPJinAmKAdSnJeWrH%2Fw7rACSDuk5VDXxNnmeVzU6kRecB2Y6xynzubF0y1M%2F45bVRrV5S03ZkJdBzFw28LXys%2FKPOAU0w2rdaYN8E33ciXSiyS%2FqVKczPwjkAgF7NQqNOO3oO2suTXleNNJC8pQaL71pQONAe7jwGsKA8DwjO3HI7OURy%2FPzy8Q9ERJEyzEMI3MyskGOqUBcE6IrGtN2eSonUOYBh%2F4e1OIU4IgJZBGdoWmmc8cHDPcfFAEIup2u2rPOOYBHAfIyX2aaFlgH4n%2BJPqfiXzYlbkiszRXszmED0n1UIw6E9wF9kr2be1m4GxrqiiYIHEYh1KJKe91pFa9Yb%2Bv2SKgwLgRNSXkptPUk87pIUpNyqAAqhsBJwuMIiOygp3QOoGkeZpEvAnwFnbQjpmoBx%2FvaVE1wwqh&X-Amz-Signature=8af70f99ff40f2dbb79a1ab82de499cd03cbb3e5250a980b8d22440723455729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655AYIVNM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T123749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BjDu5QBfOIYKN6TAbNRV6YIL%2FgTXUZUcNvqHghGa%2FuwIgJMEsTLX5Be6Q%2BhLjM%2FQGm%2FwfMrFN6R8KXd2e0go%2F9YAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPbNkNAajiQao%2F1FVircAw78Nr5VsbyTmzGis2Sp1jH3HvwAnWGDG1epyDMm57DAc4jahEjbo54vJzAnHc%2BXiJOxPlGNlrKN%2FyUROG5F4ZS68SPa3UrolAzHUnErR8dEK8zz%2F1VqbERqaqy0EzblPjGX4WYHsfA5P0wCHGyUCZgquCvlLySMy8%2FT0epl%2BF29BK%2BKvxSIV2KQDoLQvKmYfgv2D7r3OSw1z%2F1HwylEr5c1fF9NTAIVRcaM3%2F8H0pUURrCrGWbJY04F6eyv2RPh7kiKVAHC9ai7mQyAPumGF4DvHAB9RF7eU1H0JgiP27KCOImakg%2Fw%2Bfs%2BGagt5ToG%2B%2FzkxtHUd%2B4oi73qi3rysuX6xvevCzP37oNT9quIDIgQw7Q2W0aUoHMZfXSEZ4LHRasiK0CgOQx6DCMxEyIVYG%2Fvbv9K1gGDQaU%2FPVmsGuQyqgqvgqHmVJ%2BL9a%2BzsnPJinAmKAdSnJeWrH%2Fw7rACSDuk5VDXxNnmeVzU6kRecB2Y6xynzubF0y1M%2F45bVRrV5S03ZkJdBzFw28LXys%2FKPOAU0w2rdaYN8E33ciXSiyS%2FqVKczPwjkAgF7NQqNOO3oO2suTXleNNJC8pQaL71pQONAe7jwGsKA8DwjO3HI7OURy%2FPzy8Q9ERJEyzEMI3MyskGOqUBcE6IrGtN2eSonUOYBh%2F4e1OIU4IgJZBGdoWmmc8cHDPcfFAEIup2u2rPOOYBHAfIyX2aaFlgH4n%2BJPqfiXzYlbkiszRXszmED0n1UIw6E9wF9kr2be1m4GxrqiiYIHEYh1KJKe91pFa9Yb%2Bv2SKgwLgRNSXkptPUk87pIUpNyqAAqhsBJwuMIiOygp3QOoGkeZpEvAnwFnbQjpmoBx%2FvaVE1wwqh&X-Amz-Signature=640d2f2854f8e97f1873dd0b62542c22f98d229fffe150325789fa813010c39b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

