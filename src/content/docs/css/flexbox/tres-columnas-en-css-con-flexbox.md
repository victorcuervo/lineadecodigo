---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH2AUZCG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T155052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApfyS%2F%2FgQGn8UynpoFKT6S2UfAwY6lj%2Fsa%2F8Gy5ra%2BWAiBd4TsXL9wQc%2BRLK6%2BUVu6fKja5gZKFytRa%2FGRtVAXvCyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMTD1gXgyxo%2Fc8C2pmKtwDtqSub1EASOq5kOgdYs%2FeR9s%2F%2Fdf6GbRKcmwZGdvLO2awUN8CIqcB%2BqsRAAU%2BSjwcgZ3O1%2FdcvXMEQzBuWdvPWSSgcZT99FX9nNP7PyDlp%2FBL%2FuD45X1oxUNPrSRJ%2FRSPyT5SE8ZRBzhQnfMkM0qWATCEstKA6qkFZ2K8GmrFDctlRa32SR2Zuh2usi4nxZi9Cmofx2m%2FhRUe%2F8oLqqVLquSWtFzDf6huGYV%2BKizNzQEyzMGNm7c2ZUp6vFrJhOh2pBuabI0r2y2Ygd7LR2pylLfxylzmdk18P%2BrtMUhY0rEBq4GvP%2BcYQiuWNlpyQfINKDw66jrFw6%2FmjwXIJYxMgQ%2FNUMKxRfsmt9iQUULQkX%2BlS9kIB%2BL4wf%2FHkE0EVlgXndMWtELoGkxU%2F0YMvSMXqPpFHcHRS%2BIz7ZgWywo5gdlI4nGzj1CYexnOlQyWyLxOaG4n6PEbjgULXfM68fuP1tpmV5Dr%2FRcB2AID6LSiXNZBLB1D3a5hZMl8%2F0Jdw3OEkpap4eDbnv3K3xr8Sf07rYp2s8FdRb5IBr4OLY5%2BD1AFad4RSKk5OGH8I4LcdZuFz2ew%2FOSFiZLK1eKclzZqH%2FIEVRnv5FdzMHxMpMU1xSYViAg2LkhSjzxmeiIw9%2BnLyQY6pgGYQs7QKZH6y09n7DE%2F0r2DtQ0Rv8J2NjuApVzTYcKbzsuyFlXrLzauXVKYMCZpWzvnht%2FcvJ1%2BoRaqw3Zd2bzZRq1eV0HntdRwKJxzCHmUAHG%2FIPEH7WxQE0ti7nuQfYAVSn93gf8skbPcycjrGANnpjz%2Bgu8LtgDz%2Faip%2FLm5z8v6JA5G7xQm%2Bs%2BWpKqk8%2Bt1yEEQGSQFtK24jaHy6I013CrqA%2B%2Bk&X-Amz-Signature=6f21a057dc6e7c0d329b7f9c3625565583cf6e0bb261e9fc2cf2e7002ab872ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH2AUZCG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T155052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApfyS%2F%2FgQGn8UynpoFKT6S2UfAwY6lj%2Fsa%2F8Gy5ra%2BWAiBd4TsXL9wQc%2BRLK6%2BUVu6fKja5gZKFytRa%2FGRtVAXvCyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMTD1gXgyxo%2Fc8C2pmKtwDtqSub1EASOq5kOgdYs%2FeR9s%2F%2Fdf6GbRKcmwZGdvLO2awUN8CIqcB%2BqsRAAU%2BSjwcgZ3O1%2FdcvXMEQzBuWdvPWSSgcZT99FX9nNP7PyDlp%2FBL%2FuD45X1oxUNPrSRJ%2FRSPyT5SE8ZRBzhQnfMkM0qWATCEstKA6qkFZ2K8GmrFDctlRa32SR2Zuh2usi4nxZi9Cmofx2m%2FhRUe%2F8oLqqVLquSWtFzDf6huGYV%2BKizNzQEyzMGNm7c2ZUp6vFrJhOh2pBuabI0r2y2Ygd7LR2pylLfxylzmdk18P%2BrtMUhY0rEBq4GvP%2BcYQiuWNlpyQfINKDw66jrFw6%2FmjwXIJYxMgQ%2FNUMKxRfsmt9iQUULQkX%2BlS9kIB%2BL4wf%2FHkE0EVlgXndMWtELoGkxU%2F0YMvSMXqPpFHcHRS%2BIz7ZgWywo5gdlI4nGzj1CYexnOlQyWyLxOaG4n6PEbjgULXfM68fuP1tpmV5Dr%2FRcB2AID6LSiXNZBLB1D3a5hZMl8%2F0Jdw3OEkpap4eDbnv3K3xr8Sf07rYp2s8FdRb5IBr4OLY5%2BD1AFad4RSKk5OGH8I4LcdZuFz2ew%2FOSFiZLK1eKclzZqH%2FIEVRnv5FdzMHxMpMU1xSYViAg2LkhSjzxmeiIw9%2BnLyQY6pgGYQs7QKZH6y09n7DE%2F0r2DtQ0Rv8J2NjuApVzTYcKbzsuyFlXrLzauXVKYMCZpWzvnht%2FcvJ1%2BoRaqw3Zd2bzZRq1eV0HntdRwKJxzCHmUAHG%2FIPEH7WxQE0ti7nuQfYAVSn93gf8skbPcycjrGANnpjz%2Bgu8LtgDz%2Faip%2FLm5z8v6JA5G7xQm%2Bs%2BWpKqk8%2Bt1yEEQGSQFtK24jaHy6I013CrqA%2B%2Bk&X-Amz-Signature=855b8df8fe7e1965099618c297a3737cc6d09d86faaa783dd1593993991fafc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

