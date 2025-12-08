---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2EVLVD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD20B1vQNzXifndFCyOc95Mi5WyH9ftPn71t5R462IDCwIhAIzUVvVbUzoOko%2BgSSB7cFAS7nx4BJzXYHcSCIY3Zi%2F3KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwe9lCWDUZ5alkYCAUq3APhJ5fgX1kO8wYP2OEt2pzStpDk4ZFKsYBQKe2cEZ7csP7RkipOTLB3skSd2s%2FraQj5NDtKqq8g%2Bo%2FsVbv9fehgoZYcGidLDkgJjfQWJbL93Ueww2q939NpRx1equd7us64cFWDt4GAUfc%2FDUPRqQWuym8wQSqbuUFJyBeuu6KFvh7XdNmdsac76ZfxlQSihfczIsyeu21Nsk7QEoL%2F0a%2BbaqBF%2Bx6Vg%2Bue6LbLK7XRkhp%2FX2rvaowSJTYFwEICyq7Aeg%2BIaeHEffJXWTYAKI8rNilhMc%2BRXHXgEG1tS8Tu%2B1oZsRZFy%2BKMXsgClWDu03%2BuHAb8XC6F2UZTMxNcil4v5FdgpaPO%2BPoaL1etMZ7zE0koiyMxWOkBlXYuVwEsQ%2BYvukZaZfnym8WESrFkJ%2FFlBtEPuh6u1XQldqCaoXHTwhtmEyvX7CQPwAUTCNpec5bu4kR9dc4DwP1VjZiuhzTRPkSxOe0UZd96o%2BCcBouxKuXJm%2Ft9jeDF7Eu%2BCI%2BRIoWcW3SMu16jkqeBRUybE3lAM1U6aI%2F6rdMHDiVrB0imWCWMKzQPmR%2BqyUKMYSQtr20vXdnsN6o5aE6An7j%2BZHQNDj5SE8CFlVthDB17cXtNHofc7AyBeOgMqqf72TCR9NrJBjqkAUMcEWYJbM3KTSU4cl2JCawE4hrt20ez3shv2E2T%2B%2FcSJi78FfUq3AHJQTiM64TPHhNUlHfH1oy5g%2Fw8%2BMOl9JGexwVtYftieVViaj6%2FeaVtQao1oPk0UyraG8wk0V0ObcQq2DcN3fiOY30JlpXLLqHeWthzUw30bSaL0yoTS%2BPcW4d058CX5gLOGV7T7j%2BjnnNUhTydVMLUKI17YqiwjB%2F%2BDeWh&X-Amz-Signature=22fcb91c6af98007a1dd0c5d80ed6c0ccf4775586204b8fa7362173740dddc1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2EVLVD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD20B1vQNzXifndFCyOc95Mi5WyH9ftPn71t5R462IDCwIhAIzUVvVbUzoOko%2BgSSB7cFAS7nx4BJzXYHcSCIY3Zi%2F3KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwe9lCWDUZ5alkYCAUq3APhJ5fgX1kO8wYP2OEt2pzStpDk4ZFKsYBQKe2cEZ7csP7RkipOTLB3skSd2s%2FraQj5NDtKqq8g%2Bo%2FsVbv9fehgoZYcGidLDkgJjfQWJbL93Ueww2q939NpRx1equd7us64cFWDt4GAUfc%2FDUPRqQWuym8wQSqbuUFJyBeuu6KFvh7XdNmdsac76ZfxlQSihfczIsyeu21Nsk7QEoL%2F0a%2BbaqBF%2Bx6Vg%2Bue6LbLK7XRkhp%2FX2rvaowSJTYFwEICyq7Aeg%2BIaeHEffJXWTYAKI8rNilhMc%2BRXHXgEG1tS8Tu%2B1oZsRZFy%2BKMXsgClWDu03%2BuHAb8XC6F2UZTMxNcil4v5FdgpaPO%2BPoaL1etMZ7zE0koiyMxWOkBlXYuVwEsQ%2BYvukZaZfnym8WESrFkJ%2FFlBtEPuh6u1XQldqCaoXHTwhtmEyvX7CQPwAUTCNpec5bu4kR9dc4DwP1VjZiuhzTRPkSxOe0UZd96o%2BCcBouxKuXJm%2Ft9jeDF7Eu%2BCI%2BRIoWcW3SMu16jkqeBRUybE3lAM1U6aI%2F6rdMHDiVrB0imWCWMKzQPmR%2BqyUKMYSQtr20vXdnsN6o5aE6An7j%2BZHQNDj5SE8CFlVthDB17cXtNHofc7AyBeOgMqqf72TCR9NrJBjqkAUMcEWYJbM3KTSU4cl2JCawE4hrt20ez3shv2E2T%2B%2FcSJi78FfUq3AHJQTiM64TPHhNUlHfH1oy5g%2Fw8%2BMOl9JGexwVtYftieVViaj6%2FeaVtQao1oPk0UyraG8wk0V0ObcQq2DcN3fiOY30JlpXLLqHeWthzUw30bSaL0yoTS%2BPcW4d058CX5gLOGV7T7j%2BjnnNUhTydVMLUKI17YqiwjB%2F%2BDeWh&X-Amz-Signature=c6876e50be7f226168766bc729f8176574fe773311da35e95a9f9a3c855f7312&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

