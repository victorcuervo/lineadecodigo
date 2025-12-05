---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKGSX4KU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwXtevQmZqdoGM974uG9w5ACZj7G%2Fz%2F796jfIzAKoX7QIgIsDrWMxxVlnJP0%2FuZ55IG4lmp6XJWXIAZomCUXbQD%2Fkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOMPsXBea8y%2FavKTMyrcAxFbhiI1S%2FYOUnr%2BZR5VCnfA6ssPVbZh3gNBLl%2Btf5na5K77m9CU3ythKmrmK8D4TCSxgKrmRAWMkr7E3HUijUMSl0%2B2X%2BJYZ2BZnrplU3Tt909bCuANMsZSM36Q9ZK3JvCI%2FR7TODVDTu8uLFXL%2B08ZXd7NLz%2FQjDTWCXg6ZjyzbaQ84sOXixDpCdP944J82BdrEvN3qhDqew0QPaie5OofkpLudnaRVosNEwjygY2uTBzpESiWUIsULMotkjpapG16XjLyNQSFe0LH1u95FKkzoXN7zp0JPtmdvwcQxuVe%2FDzSwxBnlmLr%2BxzHk3yRLuZrRqeij49qtkxFxNkDIWstIym54x6R9ly%2F2lMG6zohtpnc1JYfqp7Pf7%2FV2eK50Y6Wu5hO91nMOU5MGxEPHFTB8NM90%2Fa41uWPQ67zTOe7lLTzi17BbUJdHo83PHe83vVUjqFgTDnKqGqjb1Us9Va2ZE%2FevuHGSpXibulLQhm9uxPE82zNUZpEdTmuesCCYDTJDkHmaAr2VIDi9R4Yccd1a1u9CkO6Oa%2Fu9XLPTUuws2RoZn7hDtm9ige%2FXetUA2OkcXe%2BtMNx0sjaRtmkargsg1Z7gk4dFwsE6t24Z5O%2BCUK%2BtPC%2F5Kj4CjXEMNaMyMkGOqUBMlyo3VC%2FC3l8RlJNFzK7FBCsvqaxkoTy2WbVag6kzCcbv%2BJv%2Fz0AvgsbxEDJXCWhs5zPxY07HBlZfffWGKW%2FjtiElOu2OcDvQyY%2BHyBG5xotQCwaGmQfGeyq23vVgXAu5UnTJPGarqPzd1U%2FfEt%2B9Q5q2hPfBCG1t8hwpUYUYd%2Bpun7yeFb0cr4tbrvFTuNsaf09Ltq4F7GICOZ1Z7Upjn01FBjm&X-Amz-Signature=db1659e1c7371ff6eecafe3fcb3c68ccd722f9928e6ef6447888c6726e845496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKGSX4KU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwXtevQmZqdoGM974uG9w5ACZj7G%2Fz%2F796jfIzAKoX7QIgIsDrWMxxVlnJP0%2FuZ55IG4lmp6XJWXIAZomCUXbQD%2Fkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOMPsXBea8y%2FavKTMyrcAxFbhiI1S%2FYOUnr%2BZR5VCnfA6ssPVbZh3gNBLl%2Btf5na5K77m9CU3ythKmrmK8D4TCSxgKrmRAWMkr7E3HUijUMSl0%2B2X%2BJYZ2BZnrplU3Tt909bCuANMsZSM36Q9ZK3JvCI%2FR7TODVDTu8uLFXL%2B08ZXd7NLz%2FQjDTWCXg6ZjyzbaQ84sOXixDpCdP944J82BdrEvN3qhDqew0QPaie5OofkpLudnaRVosNEwjygY2uTBzpESiWUIsULMotkjpapG16XjLyNQSFe0LH1u95FKkzoXN7zp0JPtmdvwcQxuVe%2FDzSwxBnlmLr%2BxzHk3yRLuZrRqeij49qtkxFxNkDIWstIym54x6R9ly%2F2lMG6zohtpnc1JYfqp7Pf7%2FV2eK50Y6Wu5hO91nMOU5MGxEPHFTB8NM90%2Fa41uWPQ67zTOe7lLTzi17BbUJdHo83PHe83vVUjqFgTDnKqGqjb1Us9Va2ZE%2FevuHGSpXibulLQhm9uxPE82zNUZpEdTmuesCCYDTJDkHmaAr2VIDi9R4Yccd1a1u9CkO6Oa%2Fu9XLPTUuws2RoZn7hDtm9ige%2FXetUA2OkcXe%2BtMNx0sjaRtmkargsg1Z7gk4dFwsE6t24Z5O%2BCUK%2BtPC%2F5Kj4CjXEMNaMyMkGOqUBMlyo3VC%2FC3l8RlJNFzK7FBCsvqaxkoTy2WbVag6kzCcbv%2BJv%2Fz0AvgsbxEDJXCWhs5zPxY07HBlZfffWGKW%2FjtiElOu2OcDvQyY%2BHyBG5xotQCwaGmQfGeyq23vVgXAu5UnTJPGarqPzd1U%2FfEt%2B9Q5q2hPfBCG1t8hwpUYUYd%2Bpun7yeFb0cr4tbrvFTuNsaf09Ltq4F7GICOZ1Z7Upjn01FBjm&X-Amz-Signature=e692e46762f8092c466bca476d0efc231a2a946eabc0c22e21b87a28d818e73d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

