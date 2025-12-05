---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636GPGOQ5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T120734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDunTKB0Opp0b3Pe4TbJ54pz05U4jbprWfZg0%2FFY9t1iAiEApJ936b6PunSCuFvlCamCLyYuJtMfs%2FWGIZRCAEf0jy4q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDBLK%2BglIiNqtdUzGHircAzQReN1SqHQJ5OFfp%2Fv0c5QA8yKqhzlXtcr1dPXYbb5luffzwn6eWeD6IdOG%2BuW99yuGBHtIAMeOZHkIOzkF4rQxTuJoMGgnWpRAFNGYY5WDCDoJ%2BlYJjmFdJfyPwoNqMPk2KFPHnlb9wbiLvFPBq4pBu63qKQVPvAV0zIbNnLFzj48Bus7qBHesjrO6hFIurjBechEoacg2glGM8UtFndtavNueZSP5AwbpVc%2BCH0o7XgCM6K8P3gbV3PaAC8uFyHWNgjWhkX%2FKv%2B1k4gVjGg8W64T877LrvTfiNzlbBq6MfwFviz3DUZnBDmkcVtRTxyyvYDng%2FvQgCaQwwUoE9iUsRURfvMZVNrEW34oP5e92N78fIQBkCKKfKF%2BMEbSOh%2FX1nGo%2FpBdfOxK67w%2BSuWpK9cZ8xHvSkbrPCbx14p6TpVhfHXNOFLlzKJK36MqiiaatWZSsBSSU%2BBrr5Xxd%2FLmaiy1N1Tws%2B8PO61csUP6Zn4p73cgCbG%2BAtM%2FzzttJ8I%2Bb3z1ULip%2BuaKo2uiFKIxzCOZgY4SI4rrgmU3lkGplZNgFmouXTvy37spju3f5m3kaTElkcfFtIaZxJWcQgezT7pgQjIBa160FHG4ACLfLxgnNS0KdoYqwCZ1IMODWyskGOqUBjnMszIXHWn4myYYsibJP1J%2F3YAaV251outSuoHJG1xZ%2BwqI3CkaH2ciNaxXgvWcMrP5ruuujXpIKsByEvH2js6PS3%2BtRBibCeI0rjZAN1IpoBNyt7%2BJEwEX13po%2Bo%2BMy7fO34ojJvvtNw2MLoRbEzl7WcFS9O0Xfl9NkUEoKku0QZCDrclwQqXCRXhveIFdEtK0EmJT6%2FP8IEdPbfXA2REi2Mvto&X-Amz-Signature=3668f569b1a3c80a43b5cb6740a35a96f6bf966769832278a665e0292558b630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636GPGOQ5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T120734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDunTKB0Opp0b3Pe4TbJ54pz05U4jbprWfZg0%2FFY9t1iAiEApJ936b6PunSCuFvlCamCLyYuJtMfs%2FWGIZRCAEf0jy4q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDBLK%2BglIiNqtdUzGHircAzQReN1SqHQJ5OFfp%2Fv0c5QA8yKqhzlXtcr1dPXYbb5luffzwn6eWeD6IdOG%2BuW99yuGBHtIAMeOZHkIOzkF4rQxTuJoMGgnWpRAFNGYY5WDCDoJ%2BlYJjmFdJfyPwoNqMPk2KFPHnlb9wbiLvFPBq4pBu63qKQVPvAV0zIbNnLFzj48Bus7qBHesjrO6hFIurjBechEoacg2glGM8UtFndtavNueZSP5AwbpVc%2BCH0o7XgCM6K8P3gbV3PaAC8uFyHWNgjWhkX%2FKv%2B1k4gVjGg8W64T877LrvTfiNzlbBq6MfwFviz3DUZnBDmkcVtRTxyyvYDng%2FvQgCaQwwUoE9iUsRURfvMZVNrEW34oP5e92N78fIQBkCKKfKF%2BMEbSOh%2FX1nGo%2FpBdfOxK67w%2BSuWpK9cZ8xHvSkbrPCbx14p6TpVhfHXNOFLlzKJK36MqiiaatWZSsBSSU%2BBrr5Xxd%2FLmaiy1N1Tws%2B8PO61csUP6Zn4p73cgCbG%2BAtM%2FzzttJ8I%2Bb3z1ULip%2BuaKo2uiFKIxzCOZgY4SI4rrgmU3lkGplZNgFmouXTvy37spju3f5m3kaTElkcfFtIaZxJWcQgezT7pgQjIBa160FHG4ACLfLxgnNS0KdoYqwCZ1IMODWyskGOqUBjnMszIXHWn4myYYsibJP1J%2F3YAaV251outSuoHJG1xZ%2BwqI3CkaH2ciNaxXgvWcMrP5ruuujXpIKsByEvH2js6PS3%2BtRBibCeI0rjZAN1IpoBNyt7%2BJEwEX13po%2Bo%2BMy7fO34ojJvvtNw2MLoRbEzl7WcFS9O0Xfl9NkUEoKku0QZCDrclwQqXCRXhveIFdEtK0EmJT6%2FP8IEdPbfXA2REi2Mvto&X-Amz-Signature=81434c0bb4f4331510e10ec4bde9bec18ea419e01bd38d78152362513f9de85f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

