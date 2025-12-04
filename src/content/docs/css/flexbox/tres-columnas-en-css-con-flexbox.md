---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664THLN2SR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICHIXwW%2F5bxF%2FruuK7EVnb0F7gDy5bvSwYcJ4BiXudnZAiB1MOpwW46%2FXksj9kau95L93rd9E9BPTaP8KXTH6lon0Cr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMri1cEoG0J9RvPsIfKtwDF9xxK%2FsorM8PLzNRhe6%2FJoLy%2BbE47qPppDBghtQ1sZrpx7RZJv1J9%2F%2B131grXHtCcaVT1Rga0ibsgEbbdsrYJgaV91e5zHF10sJynzBHjmK8kLpQZnxccKK4OTShsIw36EEPaVwyQ0YatB%2FVWV29mgVZUgDzGPnuopZhsJfJ2NxcEuur4F%2Bi0lcJNSTRAf6sDPCyVbcCIwI2jaUlMiyxHoaA%2FA5ysZUavfSLF2fdVRUJioWHVtpmtvK3N6qOpYnYqhby10mmGlfNOKZmgzTRHL93FX5thnUu6HPL4OX5y%2BEw6WkrGd9bkoXN%2B2OXtP4NDy6PrKoYXF2ICtz6ANfYUiTfTanlMm0eAbL0CE5VOVN7n1TymJq8iTbL816ZfJbE61bw3EEJY6iDsPzpePRRg10mDb83FlkG87hMTfvYVOXs5XZyTG7mT1LIvXxx229WT2jpUNL9Cyk0FGIRbANd0XKM9lgDMFweGNhwgqL2W60k0zt9IxTZYFRA6ETwIOYe9LBGO8SY1rbzZh9bqLBsm0buZvCW9uztEnCKPc2WhtqK%2Fm8%2BQOIUwkyE%2BbQqiZ%2FO8y4AX1wxqquL7jZ48dxKPTYWzFaEFnjXdGD6HIwvLylqKeDj%2BJZ77u8NWKow7K3EyQY6pgHXTAcQM8C4BNRn%2FJJ4nWhAeZH1YoujRsAC4EKgpM0oVP%2B0SQg5RVvYz09rpev%2BUus%2FOum17tQMvcmbOEZ1XJz1vwlbnHc8zejgGbvGcJlVqv8ZLN0Hcl5oC6rSyWSHokbC8MnItVOCIYWqGxWnj7HoB%2FR6bXuupmCWbHAIyrF2MxatpKirWnps0Ng3m3vmwtl4Ut7%2B2IrFQpHeqMsnJVcneuTHvRAq&X-Amz-Signature=d000f6cfce6e86791f279c396fe92e829611e52821a49c92c982c7a3e23d9247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664THLN2SR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICHIXwW%2F5bxF%2FruuK7EVnb0F7gDy5bvSwYcJ4BiXudnZAiB1MOpwW46%2FXksj9kau95L93rd9E9BPTaP8KXTH6lon0Cr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMri1cEoG0J9RvPsIfKtwDF9xxK%2FsorM8PLzNRhe6%2FJoLy%2BbE47qPppDBghtQ1sZrpx7RZJv1J9%2F%2B131grXHtCcaVT1Rga0ibsgEbbdsrYJgaV91e5zHF10sJynzBHjmK8kLpQZnxccKK4OTShsIw36EEPaVwyQ0YatB%2FVWV29mgVZUgDzGPnuopZhsJfJ2NxcEuur4F%2Bi0lcJNSTRAf6sDPCyVbcCIwI2jaUlMiyxHoaA%2FA5ysZUavfSLF2fdVRUJioWHVtpmtvK3N6qOpYnYqhby10mmGlfNOKZmgzTRHL93FX5thnUu6HPL4OX5y%2BEw6WkrGd9bkoXN%2B2OXtP4NDy6PrKoYXF2ICtz6ANfYUiTfTanlMm0eAbL0CE5VOVN7n1TymJq8iTbL816ZfJbE61bw3EEJY6iDsPzpePRRg10mDb83FlkG87hMTfvYVOXs5XZyTG7mT1LIvXxx229WT2jpUNL9Cyk0FGIRbANd0XKM9lgDMFweGNhwgqL2W60k0zt9IxTZYFRA6ETwIOYe9LBGO8SY1rbzZh9bqLBsm0buZvCW9uztEnCKPc2WhtqK%2Fm8%2BQOIUwkyE%2BbQqiZ%2FO8y4AX1wxqquL7jZ48dxKPTYWzFaEFnjXdGD6HIwvLylqKeDj%2BJZ77u8NWKow7K3EyQY6pgHXTAcQM8C4BNRn%2FJJ4nWhAeZH1YoujRsAC4EKgpM0oVP%2B0SQg5RVvYz09rpev%2BUus%2FOum17tQMvcmbOEZ1XJz1vwlbnHc8zejgGbvGcJlVqv8ZLN0Hcl5oC6rSyWSHokbC8MnItVOCIYWqGxWnj7HoB%2FR6bXuupmCWbHAIyrF2MxatpKirWnps0Ng3m3vmwtl4Ut7%2B2IrFQpHeqMsnJVcneuTHvRAq&X-Amz-Signature=728b46015c3fb61afed4bf1a4469b5df9e0b5c9a554ff950dad5b098baf70cf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

