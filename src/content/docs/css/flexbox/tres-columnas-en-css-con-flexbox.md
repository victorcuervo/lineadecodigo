---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOCH3HAK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T061835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqPOMIeX3xy1dDVgYJDOTup5fDeoEmJiE3hQ%2F5FCuV1AiBkldj7GlaH17s6j4lvmH2jYogybuVlPkqw6wH8tb0RSir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMBwvCywmgmqpjADN1KtwDTStSLJDc4DZfAZlhfvFSizJ8NBbQwbPgp%2BdwKWdauB2RvjOS0E7Qc2nPPxTQeok3fspRSdrlGuN98Gj6%2FNWULHMimMG2T%2BFQ%2BrcGTsZkvS78eOkomMVDTvxiVJOq48sPPL4bhBC%2B3L0NdOMjrjIGfXn1gFjMGchvV7TAQhfP4GnPc1mrRq1upOmyKc3Luk8IoVu8YJuIs5KEY5w7YeeTHsNk0Vs3fQOI%2BEawP6NAMnxdy%2FIxi4d1oBuLXAbvPfvgF4fD8lkK8rJ9LmjeaHSRdTawtCyOE4bwcacgh9YLR3xiMKmytP1zH3z7wgX8keMpcJBbZ0url3wnRmJWI5daJ8yiIeII8oYs%2FeQMqLJT4P0Q%2FUhaKFNsZgcIoWOiYpvZ9yuNU5GzsPBlZ9EoosxOqI8%2FDmzQ7BXmkpgAuOA0ppV0hI5gPdRFSAIBY2we5gst40GL3FhoA5mWE10gYaxnxm4K0fg8ZHVq9Fpvp38XuegSzqBCgkC5KU0VPqGEsn5fapYSdneQ11zIFkR3iPJL9kq5n%2F0uQP6ndz2ub6WUdTXemMC5eiPXLyextTsX39tdA6EcYCwxEfwJXtMDPhVY4TkRx%2F%2BHpRvEK%2BYoJ%2Fn%2FQbvuytSlvouYFAyxX34wuObIyQY6pgEiXYrNKDSk3E%2FztTs4jcF1EJYnmGRyI5GiYQT8CaumJIOwDz6KbW0IW6C6JkoxIIsWXjdbOoUhuKluJtSsYhD%2FQSEN9qKYS0eGaTaCHoQ7JeiuDTS6ElgvPJ7dzh1U7gn3KL%2Bv%2F0jhDrX%2Fg8YNs6sB551h171nM8Qfj9vpm4jt5%2B%2B%2F%2BL3hap2zap2vO73B9u%2BNDyF%2FoPcfXZhrSWiH%2FAS93hcrjbPo&X-Amz-Signature=c14fdc394c101267c32ee6b410a7ed2ddeb912606617adb4efb63aa1b39b5a4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOCH3HAK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T061835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqPOMIeX3xy1dDVgYJDOTup5fDeoEmJiE3hQ%2F5FCuV1AiBkldj7GlaH17s6j4lvmH2jYogybuVlPkqw6wH8tb0RSir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMBwvCywmgmqpjADN1KtwDTStSLJDc4DZfAZlhfvFSizJ8NBbQwbPgp%2BdwKWdauB2RvjOS0E7Qc2nPPxTQeok3fspRSdrlGuN98Gj6%2FNWULHMimMG2T%2BFQ%2BrcGTsZkvS78eOkomMVDTvxiVJOq48sPPL4bhBC%2B3L0NdOMjrjIGfXn1gFjMGchvV7TAQhfP4GnPc1mrRq1upOmyKc3Luk8IoVu8YJuIs5KEY5w7YeeTHsNk0Vs3fQOI%2BEawP6NAMnxdy%2FIxi4d1oBuLXAbvPfvgF4fD8lkK8rJ9LmjeaHSRdTawtCyOE4bwcacgh9YLR3xiMKmytP1zH3z7wgX8keMpcJBbZ0url3wnRmJWI5daJ8yiIeII8oYs%2FeQMqLJT4P0Q%2FUhaKFNsZgcIoWOiYpvZ9yuNU5GzsPBlZ9EoosxOqI8%2FDmzQ7BXmkpgAuOA0ppV0hI5gPdRFSAIBY2we5gst40GL3FhoA5mWE10gYaxnxm4K0fg8ZHVq9Fpvp38XuegSzqBCgkC5KU0VPqGEsn5fapYSdneQ11zIFkR3iPJL9kq5n%2F0uQP6ndz2ub6WUdTXemMC5eiPXLyextTsX39tdA6EcYCwxEfwJXtMDPhVY4TkRx%2F%2BHpRvEK%2BYoJ%2Fn%2FQbvuytSlvouYFAyxX34wuObIyQY6pgEiXYrNKDSk3E%2FztTs4jcF1EJYnmGRyI5GiYQT8CaumJIOwDz6KbW0IW6C6JkoxIIsWXjdbOoUhuKluJtSsYhD%2FQSEN9qKYS0eGaTaCHoQ7JeiuDTS6ElgvPJ7dzh1U7gn3KL%2Bv%2F0jhDrX%2Fg8YNs6sB551h171nM8Qfj9vpm4jt5%2B%2B%2F%2BL3hap2zap2vO73B9u%2BNDyF%2FoPcfXZhrSWiH%2FAS93hcrjbPo&X-Amz-Signature=47d7188558e049593bd817c9838c2f6811c0c462eca843b36637e685191db226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

