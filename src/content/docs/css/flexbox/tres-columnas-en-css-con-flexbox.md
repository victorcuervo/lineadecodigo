---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T55V7TT5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF3yCcAN%2BW5EiHxB7rZqLUCcGoF0zn4Kub6WwKXy27ROAiBO9dRnuHY%2FjDtfYwmph2IbJoU4c9TggN50wASAjfAOzCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf%2B2ZMW6d1LPX6HwiKtwDs8yJpZnAnOq4pB9Pt4XHmLiGuqT6GhwId%2FDRHOLbW2ChTnS2Ar6lkkFDVvjEIsg%2BJ1A6vPcTDHoNs0rczNv2eo7Y04%2BE7O%2BrL%2FLueLaaExt792mQMhfmyhgAMbqCMI3l99q9Mh5XYW4XKKNiPzMzc5HHVOf5YD05nHitl%2BfL9wsC1Md5L5XMg8Cfb3vtjugit3kz%2FYS9N39p42b%2B9gXAi9o7S6o6bkr7aZNbyW1YnArMxIrThBIL3SSOr2Vd%2BGR92AsAbz%2BU6cnK2wWw60RCr0tjG6nYVcXvRRqjIjER8mxTM55Ii5eZTi1Hbxn2CtZP%2BMqDAXvHhW4FY7ZwxKoAo%2FcBi7x%2BY3vEZo%2FkFzT9rrm3Im6Qd2JhaqKSjfmhpQynSj0Y3aIMRZO2K3LRdyAHP%2BgaKkg%2FVmxBAuP9hRei124VKxzUxKFd7kemfbnG1lLm1l2WHQVLE0YaQ6peoyKfmqXr8Dqitu1EzJ3B%2FIvXh9GYZk3fx8Isg%2BBd3J0dzzAoIBQ37rFl%2Fvl0w3PslkmBUfFhnjXOgPpAZVsAeF5yWl%2Fp%2BlqlAUnPp%2BGTH7PNFkCBhD%2BkHe5p4a8%2BEuwKIG%2FIa9ya7bHHKBqQ8OJEMoxDW19qcXLQu79eQHjZnO0wvv3SyQY6pgErVsHQAGZaS%2Bv3YdlcRCaqrKx9js6QMgMKKL7L8Asv0miz2ShTIbtCoi9DpJE%2FypZYaLw1VYqOkOTt9aeDDw9ON76QYlORS%2F6Rq6EmvSvV5B014XzjmlywhYRiUVnefOBrM4brQTrnIhnYS%2Fn3gHCWmHUTR0w%2Fbhl4mEIAWcrDCAqiTfOg0lhvVtzRRNCEaRYWTpgc9bHp5ptMtrOCDgGEXOvC95lh&X-Amz-Signature=761c2162901948c1c7b6cc5b4e3ea9b4230c1c3c1d8cbe8b63edf367bf1be89f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T55V7TT5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF3yCcAN%2BW5EiHxB7rZqLUCcGoF0zn4Kub6WwKXy27ROAiBO9dRnuHY%2FjDtfYwmph2IbJoU4c9TggN50wASAjfAOzCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf%2B2ZMW6d1LPX6HwiKtwDs8yJpZnAnOq4pB9Pt4XHmLiGuqT6GhwId%2FDRHOLbW2ChTnS2Ar6lkkFDVvjEIsg%2BJ1A6vPcTDHoNs0rczNv2eo7Y04%2BE7O%2BrL%2FLueLaaExt792mQMhfmyhgAMbqCMI3l99q9Mh5XYW4XKKNiPzMzc5HHVOf5YD05nHitl%2BfL9wsC1Md5L5XMg8Cfb3vtjugit3kz%2FYS9N39p42b%2B9gXAi9o7S6o6bkr7aZNbyW1YnArMxIrThBIL3SSOr2Vd%2BGR92AsAbz%2BU6cnK2wWw60RCr0tjG6nYVcXvRRqjIjER8mxTM55Ii5eZTi1Hbxn2CtZP%2BMqDAXvHhW4FY7ZwxKoAo%2FcBi7x%2BY3vEZo%2FkFzT9rrm3Im6Qd2JhaqKSjfmhpQynSj0Y3aIMRZO2K3LRdyAHP%2BgaKkg%2FVmxBAuP9hRei124VKxzUxKFd7kemfbnG1lLm1l2WHQVLE0YaQ6peoyKfmqXr8Dqitu1EzJ3B%2FIvXh9GYZk3fx8Isg%2BBd3J0dzzAoIBQ37rFl%2Fvl0w3PslkmBUfFhnjXOgPpAZVsAeF5yWl%2Fp%2BlqlAUnPp%2BGTH7PNFkCBhD%2BkHe5p4a8%2BEuwKIG%2FIa9ya7bHHKBqQ8OJEMoxDW19qcXLQu79eQHjZnO0wvv3SyQY6pgErVsHQAGZaS%2Bv3YdlcRCaqrKx9js6QMgMKKL7L8Asv0miz2ShTIbtCoi9DpJE%2FypZYaLw1VYqOkOTt9aeDDw9ON76QYlORS%2F6Rq6EmvSvV5B014XzjmlywhYRiUVnefOBrM4brQTrnIhnYS%2Fn3gHCWmHUTR0w%2Fbhl4mEIAWcrDCAqiTfOg0lhvVtzRRNCEaRYWTpgc9bHp5ptMtrOCDgGEXOvC95lh&X-Amz-Signature=8c5add5bdc520fdcbced0e28b38ca854c755cdf37560d92d607bce5cec946dbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

