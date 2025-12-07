---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULUMQBXP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICz3U8GNmyucqtwwOFekA10P%2Fe%2F%2FRpRAY8%2F%2B7Ny3HIk2AiBAVsTUquaUcgGTkTHmOPHaQrp1khE9HuiJFQGF12kYMyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM67xm8I0rNJOvp%2ByFKtwDMqZJKjNB34yJsfpx4BUtPzW1aOeQdH8WhQlRfdiAEf42T9NwkVAZFXpBK0f1Y50so82gKCN002nbzU7y1%2FeP0gfQt7Nc6xKAHCZ2hRPgovQkpwnJAYcRjY3EF5fvti2mt1%2Bpugpqjfi7MmxD0yD0pPPfbMUx07%2FCiulsfIoGMRZ4d56VB0ZnnTYpiNAoMrmy7QO%2FJubXdwiMogbz2SSiOwAQKPtcsXAgKEUQkQJF6WO8kAb%2Bo%2FJIWnpA2LR%2FoTkvcuPwQcekDIY90qt9Y%2BRap8Wwd08yl7dtub8EERI%2Fy4IL6MJPNLqM%2FN1gfheEsGJadYd1roj16ZUt780xvZuxQXrkHVCoIOn5dJTWIbC05rGGegQ7BEoHnGRvR3e7PBGVLTdq1mx%2FjSQeuPlqXivTXOqX0zD2EuX82HjyXXJdwVbecjcdKF8MxEY1DkDwAHTiBb28bU7NjZBXmsszuYgBHg5AVqndRHM103JkWzqXwppHFzw%2Bg%2Bc%2Fwha7Bsj14GaMqz%2F1uPa4WQ9YRaOkaShf7d6YjRbeFiQDXMX2cEfnq6d4FLGHxwiT1u0t7t8lJpbT%2FhDJekzWguiakadcSWL3yOLORvg9gobACLfEgVWoP%2F%2BRLN8gBamGUgtXQR8wvprVyQY6pgEh4Xt9zD06NHFSAvNpML2wF3KMKrfHSX31jndffvkEkt2k8BDOCgJvsRg5krwQL7OkizvhlZogy3u5tG7h%2FDqCd%2FPExx8i9b0Vuewq4I4%2BZzZk%2B1OEGomP5SQgQGU8zEyVAZU8YwFbncxjIFpHXcBvljCey%2FjjEzBeEhPMBs%2Btf3FsplM7KFvPY214CRZrl3YZzCSEWuyxd2ovPWRX%2Fu%2FgBjrYFgVl&X-Amz-Signature=28e3fc6e04d650a5dc44f9d1e8dbb32ba85314b2513f45d3981daf6fb718be7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULUMQBXP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICz3U8GNmyucqtwwOFekA10P%2Fe%2F%2FRpRAY8%2F%2B7Ny3HIk2AiBAVsTUquaUcgGTkTHmOPHaQrp1khE9HuiJFQGF12kYMyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM67xm8I0rNJOvp%2ByFKtwDMqZJKjNB34yJsfpx4BUtPzW1aOeQdH8WhQlRfdiAEf42T9NwkVAZFXpBK0f1Y50so82gKCN002nbzU7y1%2FeP0gfQt7Nc6xKAHCZ2hRPgovQkpwnJAYcRjY3EF5fvti2mt1%2Bpugpqjfi7MmxD0yD0pPPfbMUx07%2FCiulsfIoGMRZ4d56VB0ZnnTYpiNAoMrmy7QO%2FJubXdwiMogbz2SSiOwAQKPtcsXAgKEUQkQJF6WO8kAb%2Bo%2FJIWnpA2LR%2FoTkvcuPwQcekDIY90qt9Y%2BRap8Wwd08yl7dtub8EERI%2Fy4IL6MJPNLqM%2FN1gfheEsGJadYd1roj16ZUt780xvZuxQXrkHVCoIOn5dJTWIbC05rGGegQ7BEoHnGRvR3e7PBGVLTdq1mx%2FjSQeuPlqXivTXOqX0zD2EuX82HjyXXJdwVbecjcdKF8MxEY1DkDwAHTiBb28bU7NjZBXmsszuYgBHg5AVqndRHM103JkWzqXwppHFzw%2Bg%2Bc%2Fwha7Bsj14GaMqz%2F1uPa4WQ9YRaOkaShf7d6YjRbeFiQDXMX2cEfnq6d4FLGHxwiT1u0t7t8lJpbT%2FhDJekzWguiakadcSWL3yOLORvg9gobACLfEgVWoP%2F%2BRLN8gBamGUgtXQR8wvprVyQY6pgEh4Xt9zD06NHFSAvNpML2wF3KMKrfHSX31jndffvkEkt2k8BDOCgJvsRg5krwQL7OkizvhlZogy3u5tG7h%2FDqCd%2FPExx8i9b0Vuewq4I4%2BZzZk%2B1OEGomP5SQgQGU8zEyVAZU8YwFbncxjIFpHXcBvljCey%2FjjEzBeEhPMBs%2Btf3FsplM7KFvPY214CRZrl3YZzCSEWuyxd2ovPWRX%2Fu%2FgBjrYFgVl&X-Amz-Signature=7f7c06f16d01ebc5e6b1ec363f5479c2cc2b148511fac1bf77b3a4126f5afee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

