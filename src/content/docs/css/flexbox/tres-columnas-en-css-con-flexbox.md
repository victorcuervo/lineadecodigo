---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V4MDBBX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T103356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg91rDDIu92A%2FyFE%2FyX8KK98q1GbluwIP9DyhBiHMnjAiEA3HVhuBTTnyhrhKSWfCbEtrHoNRDWbdGrF3Jf28h9wKkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDLqn7LFdhMYlanNbWSrcA7iIz2M0rCjCOOuFgPb5ImeMxGMv0saMc06fY3hCUCzaTL1BEDT6jkzhWYMCI3BzxTAItWsLdhQXvQM8GkdweIym6Lam7KM7gpjmLhGkIPsW5em74BuDBHSBxcXPvt2CFyX6Xm0yPXkh0G4Sz0inrfktPNL%2FGYoWzYI4q7M%2Bm4gm0lYWeUL1HJWJr0zt81X0263Z688xq8keOINzmnxBOXzYOpH5q6zXacm1TPdA2%2B6eBk%2BSjf5KIWZEUjLzXd9%2FxqDhWmA4rTe5jRK1c%2Flcn6i4pbfpGVgsb5TL764cwUhxBGE9VJIhcAsRmCc3X%2Bn1ET6R5vtaOQ24rzf%2FlLrAQrvPGW3qnnZ%2BMZxW%2FEBksiXd%2B0l7n50CmWSITK9pQ9iBii6mlrTmNYTyl5ZJAwj8eSjtXa77HDEL2%2FK85knHPfFW6iIxVuFovIjsg7Gz09M%2FpZJI5NXd09NswTjpUejdHiNTQHUKzn0tOY1TKw%2BChQSeA9GdmFHYgG3AQk8aEwROTny66DYJhXlfq8sTiRWQLHjfU7bkxoTkqaVpWsgQTDOTYdnZyQZ%2BwPsltSNOS1zhJWut6lFh38EFmLn%2BKOm%2BTBa3OCDYBNnr5m6LYN2cjFPpHF6qhnZSgIGvhocfMPzWyskGOqUB5UC59A6pGoEDSRMK6j6Szk8jNg5bB6myeO7Z4vexSZLNAajZN3xHoBAmNZpih1bDeLU2N03r1eKGmENi2fs3xgck2%2FM8HrN93ptyl35%2Bj20EhZ2bs02b0GmmW09xBD%2F7wbriFG1TYxOIhvyCnWY1T%2BdOUtWRCdD9iDdEM8pcrIro0WOgfxjlySTYrdv9cP2VNPfhsLMXhE%2FArrAR3ImDo5GW%2BIES&X-Amz-Signature=bcaeac131e087a42c752df501e75772e4e34f0f8dc01f7e9cadbde1193c1c1ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V4MDBBX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T103356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg91rDDIu92A%2FyFE%2FyX8KK98q1GbluwIP9DyhBiHMnjAiEA3HVhuBTTnyhrhKSWfCbEtrHoNRDWbdGrF3Jf28h9wKkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDLqn7LFdhMYlanNbWSrcA7iIz2M0rCjCOOuFgPb5ImeMxGMv0saMc06fY3hCUCzaTL1BEDT6jkzhWYMCI3BzxTAItWsLdhQXvQM8GkdweIym6Lam7KM7gpjmLhGkIPsW5em74BuDBHSBxcXPvt2CFyX6Xm0yPXkh0G4Sz0inrfktPNL%2FGYoWzYI4q7M%2Bm4gm0lYWeUL1HJWJr0zt81X0263Z688xq8keOINzmnxBOXzYOpH5q6zXacm1TPdA2%2B6eBk%2BSjf5KIWZEUjLzXd9%2FxqDhWmA4rTe5jRK1c%2Flcn6i4pbfpGVgsb5TL764cwUhxBGE9VJIhcAsRmCc3X%2Bn1ET6R5vtaOQ24rzf%2FlLrAQrvPGW3qnnZ%2BMZxW%2FEBksiXd%2B0l7n50CmWSITK9pQ9iBii6mlrTmNYTyl5ZJAwj8eSjtXa77HDEL2%2FK85knHPfFW6iIxVuFovIjsg7Gz09M%2FpZJI5NXd09NswTjpUejdHiNTQHUKzn0tOY1TKw%2BChQSeA9GdmFHYgG3AQk8aEwROTny66DYJhXlfq8sTiRWQLHjfU7bkxoTkqaVpWsgQTDOTYdnZyQZ%2BwPsltSNOS1zhJWut6lFh38EFmLn%2BKOm%2BTBa3OCDYBNnr5m6LYN2cjFPpHF6qhnZSgIGvhocfMPzWyskGOqUB5UC59A6pGoEDSRMK6j6Szk8jNg5bB6myeO7Z4vexSZLNAajZN3xHoBAmNZpih1bDeLU2N03r1eKGmENi2fs3xgck2%2FM8HrN93ptyl35%2Bj20EhZ2bs02b0GmmW09xBD%2F7wbriFG1TYxOIhvyCnWY1T%2BdOUtWRCdD9iDdEM8pcrIro0WOgfxjlySTYrdv9cP2VNPfhsLMXhE%2FArrAR3ImDo5GW%2BIES&X-Amz-Signature=0ed68fdec89e171c757b1b6e116818f53422af92d1f58f6b260339351bc36f17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

