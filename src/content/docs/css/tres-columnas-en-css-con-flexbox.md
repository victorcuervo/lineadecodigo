---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBF7MPNZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T223633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD6Cb%2FX5K3IXj9xngMujBZ99hEDcrbKNPlpZGAK1HGY9gIhAKuhml%2Fxq9zmRY9UoAWNOTgHq4vFd8hm9fe6n39xKf1eKv8DCDcQABoMNjM3NDIzMTgzODA1IgwU4hKCODqhgz%2BCaJUq3AM39U6Onfm2qmbtsKk8TwEHS7nVB0PocP43C4CKas0WVSZkbgBgcNUmofv8ULZxg93bh7XhzgMfrht9x06ck26jxnHe8Fng7Lni7qsvL4cWd0BhPLE%2BXlAHUTjC4bagsNPn6i9bI868ISCIBZCLjPPNM0w2qnnCsbikO%2Fz4M0xGxHjyv8BZGLBNf%2FbHAj89V5e0ADibHM1%2F%2FTiroHRffxmejueVy2V9DQ9h4jnU4DBbyil1JMnfq1l1Y5pkn1irtS6de%2Fl9MJVcF8UwBgd3WY1G3Tr324bAwI6gxtghZJ%2F2DjsaLqgoWsLxA2l1egwBKRVLERy5B%2F%2FD9JDN6Df9kqWoXWUTj5KII23NkJANhar4lkfW1Qo%2FZHct1nWc9ZU50oXP66J9L73%2Bwlhb8%2FUYm9yC0MqM70UH6kaGVFZgddGnK%2FMVlkplXQe0n1zTIlWr3hgUKVuzId95gDvMFsmrnQAuB74AKqcF7sIgZw0TKO11jjCEu%2BlWoVLwHNZmoo%2FoFeFD%2B3Zvn4De9felvplXD06eeOGr69z2qblnw23UP1Iqj%2F%2FPEL6cqjzWipsD%2BP4SXK6cMOKFcbrH2r1DcaI474KXfIkGnOqSqZLIdb2J45PIqNcRZ6rtgSOkVv5u1zCH3cLJBjqkAYE78gBlIQUyOW8T2bSf%2B01%2FtkO1xdbOgetp3g8V%2BDGAC2yqNi3Agm2O1ZnmeUNFisGOuGR0m%2FeO7e7cPt2kZn62erBSufJWU1NRihVrUdRL2x8UEtK0ea%2F69FZ6CmXGsez3uK%2BRX%2Fv7d%2Fp%2BF3BqX83swSdpNGXlHeW%2BtCFmPu0NbyBUGDGdtdzH1U4eqbH7d271382omxH7tFAO%2Bi5JXyy2H%2Bv7&X-Amz-Signature=4b231d542252c066d967e8d473eac9f73e0f999fad155e7b002954bcc8a08b5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBF7MPNZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T223633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD6Cb%2FX5K3IXj9xngMujBZ99hEDcrbKNPlpZGAK1HGY9gIhAKuhml%2Fxq9zmRY9UoAWNOTgHq4vFd8hm9fe6n39xKf1eKv8DCDcQABoMNjM3NDIzMTgzODA1IgwU4hKCODqhgz%2BCaJUq3AM39U6Onfm2qmbtsKk8TwEHS7nVB0PocP43C4CKas0WVSZkbgBgcNUmofv8ULZxg93bh7XhzgMfrht9x06ck26jxnHe8Fng7Lni7qsvL4cWd0BhPLE%2BXlAHUTjC4bagsNPn6i9bI868ISCIBZCLjPPNM0w2qnnCsbikO%2Fz4M0xGxHjyv8BZGLBNf%2FbHAj89V5e0ADibHM1%2F%2FTiroHRffxmejueVy2V9DQ9h4jnU4DBbyil1JMnfq1l1Y5pkn1irtS6de%2Fl9MJVcF8UwBgd3WY1G3Tr324bAwI6gxtghZJ%2F2DjsaLqgoWsLxA2l1egwBKRVLERy5B%2F%2FD9JDN6Df9kqWoXWUTj5KII23NkJANhar4lkfW1Qo%2FZHct1nWc9ZU50oXP66J9L73%2Bwlhb8%2FUYm9yC0MqM70UH6kaGVFZgddGnK%2FMVlkplXQe0n1zTIlWr3hgUKVuzId95gDvMFsmrnQAuB74AKqcF7sIgZw0TKO11jjCEu%2BlWoVLwHNZmoo%2FoFeFD%2B3Zvn4De9felvplXD06eeOGr69z2qblnw23UP1Iqj%2F%2FPEL6cqjzWipsD%2BP4SXK6cMOKFcbrH2r1DcaI474KXfIkGnOqSqZLIdb2J45PIqNcRZ6rtgSOkVv5u1zCH3cLJBjqkAYE78gBlIQUyOW8T2bSf%2B01%2FtkO1xdbOgetp3g8V%2BDGAC2yqNi3Agm2O1ZnmeUNFisGOuGR0m%2FeO7e7cPt2kZn62erBSufJWU1NRihVrUdRL2x8UEtK0ea%2F69FZ6CmXGsez3uK%2BRX%2Fv7d%2Fp%2BF3BqX83swSdpNGXlHeW%2BtCFmPu0NbyBUGDGdtdzH1U4eqbH7d271382omxH7tFAO%2Bi5JXyy2H%2Bv7&X-Amz-Signature=e2b22d665ab2a58602db0e19533f828a593741375ea9d4f06712225aa528fd36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

