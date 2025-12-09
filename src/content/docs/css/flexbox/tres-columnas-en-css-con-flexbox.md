---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ55GSJD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Ffv730eYflkXlTZd56ftlC5PHIJF7C3iNoQTDVfA5aAIhALKHd1JvtmHvQhu%2BFAYvnSawdEgiNTWBi36goOlByJm3KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwf7kh4fHMZT0oRzUwq3AMc7%2BifdNCICytLzaiXbKshqEK5%2FX0xeFUyQcn74CenNAr7mdw6%2Byt5vZqd4OobaZt7C7VgDXxQktQDpc1DY3GE0Fw1QX3WsSOCj3a6Q7zAUR%2FHizTRN2mpFgFT3agQryJZkIGQGghktFIHpNrb7BHVVvqjAX8mvmB0eV4Z1Hg8OBnbDisv9lfJRCSpGQ1mmt2JfPxNX4PgCEwq%2F2ak6Q6WfrLeU6mKWypMB5cQZ4oLTACmXG%2Bp9MVxY%2BJse4CaFC0S1cKgL02k8VByoA%2FA%2BzXwycCGiOBEZbo8vzrZWgBlVnHogxnNqmjleGegthHq7L9bve5EYM11jxpGgh3x8b38jxUiPBiGRXIFJ%2Bhr%2F62eNrOBywr78cjS7XIuGe3m4kaQJCdX36yS7i7M%2BYKOnm%2BwNdLO%2B2cyszYpzG%2BK%2BCWkkzelA%2FzhpWEXtVs2aRay0tRxqjuvAwx8VowD62mjSyZFLo%2FgPVLR0cn2KjWqxzqXHk1znESU05R9%2F%2FJNqY1pp6rqj56BSHZtnRjJ0p0cvjGTsFyL0CPvoZc4M%2BjR9kck2Iq7ADBqgyYdwdYiYL11yLtgw5cRAEusBSthr6%2FJ1QsouX3FTUL8d3yTLJLCZzhMciqItCh5KuqwMeh15jCgrt7JBjqkAahm2K3gcyXc0KfhoWkzC4K8naXUWrYAuJcweK%2BcDdP94L3sXTiRsBouG7GTFxZsPz%2Fjz8ZbwaisnX4yTgNsQz%2BsblEklPUEXrVbZ%2FTpJoO8pmUx%2BoxSpDjz9LebrNxGGktE359%2BtKUsZwutKUu%2B3fHcgMWpRI9cPAukJXbpqt4HRC5y9bdOcMBVxHc67MF8tsl3tXd%2BvR2I8P3QI%2B%2BFEl0Kf3bP&X-Amz-Signature=7a188d262e561b24ed74c44921c27a7c103d369131aebabf26e4a802504c97ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ55GSJD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Ffv730eYflkXlTZd56ftlC5PHIJF7C3iNoQTDVfA5aAIhALKHd1JvtmHvQhu%2BFAYvnSawdEgiNTWBi36goOlByJm3KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwf7kh4fHMZT0oRzUwq3AMc7%2BifdNCICytLzaiXbKshqEK5%2FX0xeFUyQcn74CenNAr7mdw6%2Byt5vZqd4OobaZt7C7VgDXxQktQDpc1DY3GE0Fw1QX3WsSOCj3a6Q7zAUR%2FHizTRN2mpFgFT3agQryJZkIGQGghktFIHpNrb7BHVVvqjAX8mvmB0eV4Z1Hg8OBnbDisv9lfJRCSpGQ1mmt2JfPxNX4PgCEwq%2F2ak6Q6WfrLeU6mKWypMB5cQZ4oLTACmXG%2Bp9MVxY%2BJse4CaFC0S1cKgL02k8VByoA%2FA%2BzXwycCGiOBEZbo8vzrZWgBlVnHogxnNqmjleGegthHq7L9bve5EYM11jxpGgh3x8b38jxUiPBiGRXIFJ%2Bhr%2F62eNrOBywr78cjS7XIuGe3m4kaQJCdX36yS7i7M%2BYKOnm%2BwNdLO%2B2cyszYpzG%2BK%2BCWkkzelA%2FzhpWEXtVs2aRay0tRxqjuvAwx8VowD62mjSyZFLo%2FgPVLR0cn2KjWqxzqXHk1znESU05R9%2F%2FJNqY1pp6rqj56BSHZtnRjJ0p0cvjGTsFyL0CPvoZc4M%2BjR9kck2Iq7ADBqgyYdwdYiYL11yLtgw5cRAEusBSthr6%2FJ1QsouX3FTUL8d3yTLJLCZzhMciqItCh5KuqwMeh15jCgrt7JBjqkAahm2K3gcyXc0KfhoWkzC4K8naXUWrYAuJcweK%2BcDdP94L3sXTiRsBouG7GTFxZsPz%2Fjz8ZbwaisnX4yTgNsQz%2BsblEklPUEXrVbZ%2FTpJoO8pmUx%2BoxSpDjz9LebrNxGGktE359%2BtKUsZwutKUu%2B3fHcgMWpRI9cPAukJXbpqt4HRC5y9bdOcMBVxHc67MF8tsl3tXd%2BvR2I8P3QI%2B%2BFEl0Kf3bP&X-Amz-Signature=265bba421673eae3216e781462a68dc22529e520d751b2dc3779de6e94ae00ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

