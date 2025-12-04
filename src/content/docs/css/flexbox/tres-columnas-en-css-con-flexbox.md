---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG2IFGLO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIBL2tuP73xlZDw%2BobdrcOGZ2nzUBge8UVb%2B8ZMJH15zIAiB6ABgts27BuaOrR2mSoXpNG3zsFaMkhjYnMRMmVr6Anir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMaiu08oshHXJLDjQVKtwDKnFSiQcStd14iXC2S1Ui3T7qI4d9K83BoCiWygi8P3LqWXZQOBDhijP0IjW1QFEtSUmb12f%2BW8EfgG%2F%2F8pZhDKijYkgiI0dUxVD%2BesMrmUq8iEe1IT5mYvajjvGo1uR4%2F%2FbAObzukOdVktxf%2Fphho%2Fa67R01SBPDt7TpTnMTprjOx%2FhREPMnMMyZLnbT5rQu9KaKv3E7vphdV6X9LlhDlYVcnyUz1dJEzUilKBTjQPHELAazO03A%2BQMa%2FbHTXHbEzZRLFdAU5np1MZZjRTwuNtZAo%2BNTfiw%2Blw5mlZzViK6Y0aYsvSrkkbtXGfkw0VaK8xjUHEmHcBvmHCBZZFgMacJ9ioURZHoHUrBj0jS4HTTfR5vCh%2B3PJNAu76vp1kWSfAwRXWGnavlaQ9qw%2Fvi2DxHnllkqVgETktvduHiIEDS5hWwpqGOoJXQ3SVK8YRbbhtUQS9wRxpN%2BQ2BSpSIoKpaZ5TMGUwb9VOX8sxnDcwasuzue2a7GIkk2Jr158C6p0Iq%2B3U1MVqK%2FldRqo8VGt%2Bplv0B2XPkXQ7YJoHXiQD4oI%2FX92kOkfz8WfaYr%2BeEF7yYcrply8xkiaWlIy368IxLUzDRzPrTqDrZJhOhtv5eVO%2BKCBI0fKt%2FSTV4wj7TDyQY6pgFraY3NvIbFUwPUFsBKwAvLmzBHBGxjt6aFLB1juNBjNxQenLKcd0pLvESbJecwMQT0PHBTC0q8%2FMMrzIVo%2FK5rUfSYPJ4xyVEwic9z0rEylxsjAQYk0ZyR1rBDJazmijV0O4BxX9ZpwcGr0MwGRhArgAJwnvywLew4gTIiB5CNn1nxwzq1Jr3VCx0%2BuDySo%2F7AcHtBjYg8V8igvtK8NfPl1XhBysLq&X-Amz-Signature=1ec73c8bddb56eb0611dad41afef5b28a1a7505362b8bd461225ff26cd178935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG2IFGLO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIBL2tuP73xlZDw%2BobdrcOGZ2nzUBge8UVb%2B8ZMJH15zIAiB6ABgts27BuaOrR2mSoXpNG3zsFaMkhjYnMRMmVr6Anir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMaiu08oshHXJLDjQVKtwDKnFSiQcStd14iXC2S1Ui3T7qI4d9K83BoCiWygi8P3LqWXZQOBDhijP0IjW1QFEtSUmb12f%2BW8EfgG%2F%2F8pZhDKijYkgiI0dUxVD%2BesMrmUq8iEe1IT5mYvajjvGo1uR4%2F%2FbAObzukOdVktxf%2Fphho%2Fa67R01SBPDt7TpTnMTprjOx%2FhREPMnMMyZLnbT5rQu9KaKv3E7vphdV6X9LlhDlYVcnyUz1dJEzUilKBTjQPHELAazO03A%2BQMa%2FbHTXHbEzZRLFdAU5np1MZZjRTwuNtZAo%2BNTfiw%2Blw5mlZzViK6Y0aYsvSrkkbtXGfkw0VaK8xjUHEmHcBvmHCBZZFgMacJ9ioURZHoHUrBj0jS4HTTfR5vCh%2B3PJNAu76vp1kWSfAwRXWGnavlaQ9qw%2Fvi2DxHnllkqVgETktvduHiIEDS5hWwpqGOoJXQ3SVK8YRbbhtUQS9wRxpN%2BQ2BSpSIoKpaZ5TMGUwb9VOX8sxnDcwasuzue2a7GIkk2Jr158C6p0Iq%2B3U1MVqK%2FldRqo8VGt%2Bplv0B2XPkXQ7YJoHXiQD4oI%2FX92kOkfz8WfaYr%2BeEF7yYcrply8xkiaWlIy368IxLUzDRzPrTqDrZJhOhtv5eVO%2BKCBI0fKt%2FSTV4wj7TDyQY6pgFraY3NvIbFUwPUFsBKwAvLmzBHBGxjt6aFLB1juNBjNxQenLKcd0pLvESbJecwMQT0PHBTC0q8%2FMMrzIVo%2FK5rUfSYPJ4xyVEwic9z0rEylxsjAQYk0ZyR1rBDJazmijV0O4BxX9ZpwcGr0MwGRhArgAJwnvywLew4gTIiB5CNn1nxwzq1Jr3VCx0%2BuDySo%2F7AcHtBjYg8V8igvtK8NfPl1XhBysLq&X-Amz-Signature=9d83dad511050208e84d552161cfde52edd2445decd4a34ce2bf5bf0c1190b87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

