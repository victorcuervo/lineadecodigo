---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW6DTX2B%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPWl8OK1Aypvji1pWNo%2FHEFf7idDOCt%2BmX4m%2Bquf9GzAiEAjdvbe8Gyhs20AaK2TWb7NIAsq9ZBP5NIy4SDArOcZmUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDES5BDtauyQS%2FLKEOircA1qImQpX9NJeGC7%2FWn%2FL9HMraFOiv1tCqwpyQZKWY0fXJ8%2BM3h0ZMZC8THaJqe7D3TN%2BzrZ7l8PVAkWW4LR7ow6eRS46I0Rz37DnHPZxnyIZC3SRKYXz9dYN4d7B9TIx27UrkyBRKbqfQgOEnj2BN77jsy55YRvvYbUibVhhfyrOJ%2FNkI0MzmoO%2FVotN2alYd5QtadYDa39P2zbczZzdGFsnh%2F4Tn6ZVAhlvn%2By%2BLO0ZUnQKO4EnNwaz9j4r2o77%2FfU9NgfcGY3c%2FMB6awnwe9kSNzb%2FllpSpQCLexK9o0kiiWz%2B9Yi0sia7aiLkXuxVm%2BstNigyS8QJEbCN9Jek3zJfRO%2BEt2lyLtx2wgPttBcRti3OjMDVgWF56vpfG8qXe33e2rIMprSG8d6d4fVUhjUFzLVrz1RnUpwnYwv%2Fps89xOubSlh0ToIU9UMam39M2j%2BJvdMcZ36BrYxiz0U9gESziUJHCdQh0%2BGe7uG5%2BvdsfYdzi8IqZXF0skd4TQy1Z7AsWV177E1i56M8LIxUWENUAr97o6ALY%2Bon%2BL1Ov410b87j6qOIs6euMjtyj11pU8gZxh95KbMnqIAFRhIxtVw53iBTzIRiVx9dF1Tf91fdUw%2BnDJVYiKCIJOrEMIb90skGOqUBWkr1%2BHfV%2Fk%2BV6ncPneXyPF07vBOPjxn5HbfY5vmk5fyOIQ7tkw4FAyEvffdvA4H4s1Y7SGlFfHpkLaSzagkpgPKeAeVods7G1DGYMcYu8oH177IOOAuQBHXOhLxxfFp2gQ%2BYduJRPZe8GOpr1DZTjhl2D%2BU409UYEWDqqbPb2sBEq8mb5N3VrUZgGHlJSul1Hyv6HKoGfdlJmfgyhqwCbGCuhl%2BN&X-Amz-Signature=caaa031107367aae9e9c61dbb3cccd0142e269260ed6042472c874fbc3980766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW6DTX2B%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPWl8OK1Aypvji1pWNo%2FHEFf7idDOCt%2BmX4m%2Bquf9GzAiEAjdvbe8Gyhs20AaK2TWb7NIAsq9ZBP5NIy4SDArOcZmUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDES5BDtauyQS%2FLKEOircA1qImQpX9NJeGC7%2FWn%2FL9HMraFOiv1tCqwpyQZKWY0fXJ8%2BM3h0ZMZC8THaJqe7D3TN%2BzrZ7l8PVAkWW4LR7ow6eRS46I0Rz37DnHPZxnyIZC3SRKYXz9dYN4d7B9TIx27UrkyBRKbqfQgOEnj2BN77jsy55YRvvYbUibVhhfyrOJ%2FNkI0MzmoO%2FVotN2alYd5QtadYDa39P2zbczZzdGFsnh%2F4Tn6ZVAhlvn%2By%2BLO0ZUnQKO4EnNwaz9j4r2o77%2FfU9NgfcGY3c%2FMB6awnwe9kSNzb%2FllpSpQCLexK9o0kiiWz%2B9Yi0sia7aiLkXuxVm%2BstNigyS8QJEbCN9Jek3zJfRO%2BEt2lyLtx2wgPttBcRti3OjMDVgWF56vpfG8qXe33e2rIMprSG8d6d4fVUhjUFzLVrz1RnUpwnYwv%2Fps89xOubSlh0ToIU9UMam39M2j%2BJvdMcZ36BrYxiz0U9gESziUJHCdQh0%2BGe7uG5%2BvdsfYdzi8IqZXF0skd4TQy1Z7AsWV177E1i56M8LIxUWENUAr97o6ALY%2Bon%2BL1Ov410b87j6qOIs6euMjtyj11pU8gZxh95KbMnqIAFRhIxtVw53iBTzIRiVx9dF1Tf91fdUw%2BnDJVYiKCIJOrEMIb90skGOqUBWkr1%2BHfV%2Fk%2BV6ncPneXyPF07vBOPjxn5HbfY5vmk5fyOIQ7tkw4FAyEvffdvA4H4s1Y7SGlFfHpkLaSzagkpgPKeAeVods7G1DGYMcYu8oH177IOOAuQBHXOhLxxfFp2gQ%2BYduJRPZe8GOpr1DZTjhl2D%2BU409UYEWDqqbPb2sBEq8mb5N3VrUZgGHlJSul1Hyv6HKoGfdlJmfgyhqwCbGCuhl%2BN&X-Amz-Signature=011d63c65b29d58d18d42d6ba70223421de9e5254aff9744d7dc9f5c5901a531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

