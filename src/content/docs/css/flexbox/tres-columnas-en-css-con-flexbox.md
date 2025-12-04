---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663BTJGTJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCKAkyYi1WZsIN9qzaxPn1xY5zqpk0MxdPpkKWzK6pGDAIgC11hud7wOxoBBNc57lGSff61vJkfWHRKTZjVJ4iepRQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDP1kT8ohJw3YWTpilyrcA%2FhZMlW%2B72%2Bz3Bc2fq7pJkorGDoaP9JcqXk15H0DRWo9ggoGV38KtZxoeXGddRcF98ls9%2Fkodizv2Iozw2YdXxZ0VlWQG4GBGSGx%2BX86Up5OKFdiua0tDx4TChcR4f1fcqfw9Z7ZdALMTxtYUUhkya3DzR9dvHfC295sOSthXTxVdr0apYbyntWeymPoqoJpiven%2BzEIrxBDubszuXZBmCZtxTOOdDDFf7suCtDQPt5tQHOLSETiNjG81iBV1ucUdvXSvTwHOIKkDUkhe74GOFP1c0Tn71K0cPy4gHsiGZgvABpk8RQqehEqcyWzfEW00dW9hL5zJsrvQXWC172R%2F3CW8rn%2BtkZ4N77WBjgi%2FRfM6f9u7e4QumSb99khc38CwXH6%2FWorYXKny8tJhGkmtOcalgxNf8pWRFcj1uthmZaZcvB0Ii6IuWxtxhfl3uYC4ha65dJpITOUTh19nbHEhmMwvAkDS4CQYSuulSOYut9smgatUther11nHOUyjono%2FwGLppQPJiwRdrfuAqKN1IDlQF1keJjk7RRITg0fOv99H3J3t6vxB8kiPNMeWu9WBPWBNM6ULmznYIDeYHm6m6auvbcSHsZdrY3aAK2qlyDGjgXqPZDnObeYjnHvML%2FKxMkGOqUB%2B2Jdmvc4phaizX%2Fn0SfWYlkVlSY%2FI%2B6RU%2BK7cak3%2BaoV29g0QMh96loxgByQxw8xkSOfgN6UsIMGVhHxN42DU35VYkh%2BXQ7DVx0BJyQWBYgvWIVs9pr3mcVoHp2BYQI8EGdYGhnQCcJhlQrch2OkPZPSdzIyVW9AFGdsiQWlnUKLUid4iJzuldUNwgHpgYjiJMgDiUnw3H1V0GhfjU5XDr7g6fCZ&X-Amz-Signature=7020e03cc68e54ed65bb663d9932787626d37ba0f811443bd1f516f3fc3bfb9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663BTJGTJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCKAkyYi1WZsIN9qzaxPn1xY5zqpk0MxdPpkKWzK6pGDAIgC11hud7wOxoBBNc57lGSff61vJkfWHRKTZjVJ4iepRQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDP1kT8ohJw3YWTpilyrcA%2FhZMlW%2B72%2Bz3Bc2fq7pJkorGDoaP9JcqXk15H0DRWo9ggoGV38KtZxoeXGddRcF98ls9%2Fkodizv2Iozw2YdXxZ0VlWQG4GBGSGx%2BX86Up5OKFdiua0tDx4TChcR4f1fcqfw9Z7ZdALMTxtYUUhkya3DzR9dvHfC295sOSthXTxVdr0apYbyntWeymPoqoJpiven%2BzEIrxBDubszuXZBmCZtxTOOdDDFf7suCtDQPt5tQHOLSETiNjG81iBV1ucUdvXSvTwHOIKkDUkhe74GOFP1c0Tn71K0cPy4gHsiGZgvABpk8RQqehEqcyWzfEW00dW9hL5zJsrvQXWC172R%2F3CW8rn%2BtkZ4N77WBjgi%2FRfM6f9u7e4QumSb99khc38CwXH6%2FWorYXKny8tJhGkmtOcalgxNf8pWRFcj1uthmZaZcvB0Ii6IuWxtxhfl3uYC4ha65dJpITOUTh19nbHEhmMwvAkDS4CQYSuulSOYut9smgatUther11nHOUyjono%2FwGLppQPJiwRdrfuAqKN1IDlQF1keJjk7RRITg0fOv99H3J3t6vxB8kiPNMeWu9WBPWBNM6ULmznYIDeYHm6m6auvbcSHsZdrY3aAK2qlyDGjgXqPZDnObeYjnHvML%2FKxMkGOqUB%2B2Jdmvc4phaizX%2Fn0SfWYlkVlSY%2FI%2B6RU%2BK7cak3%2BaoV29g0QMh96loxgByQxw8xkSOfgN6UsIMGVhHxN42DU35VYkh%2BXQ7DVx0BJyQWBYgvWIVs9pr3mcVoHp2BYQI8EGdYGhnQCcJhlQrch2OkPZPSdzIyVW9AFGdsiQWlnUKLUid4iJzuldUNwgHpgYjiJMgDiUnw3H1V0GhfjU5XDr7g6fCZ&X-Amz-Signature=7f014624f8da70632bdbf787ad39f54155ad4a603607ffe096ed8be9bd22aa1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

