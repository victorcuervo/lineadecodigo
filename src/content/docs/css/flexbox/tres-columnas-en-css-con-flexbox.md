---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NLMU3E2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDGGy9pB8sQdNfmTdvahx21g34OPtfcnpqFbHJoCpH9vwIhAMBDa%2BAx%2BwDB9PUh%2FdH2sY9Pp1g9EHU%2BQt1GVZYtoWy3Kv8DCD8QABoMNjM3NDIzMTgzODA1Igx370h1C%2BevzSsRnQEq3AMtIBC%2BcW3TN6HxJuZ0AWgc8oF4y%2FNYM78AB2CGhuMDclZknpFPauhfa1UQz8%2BOtzoDrZBPrgC%2FTizpgjriTVxZr6gPRyJq9Ggp8vr6rMfIL3PCz%2BmASzPdxHZ4oRxplzNZNVAg1BwdyTujfsgM89zoxxmf7C%2FXWCZOfInBqEMuKW6pSzH9oKKFWXIEaa1Bmj2lq8iBI7P0j96cGD9g5U3MDUWctTb%2BxIDPnYJTml8Kj0qVZi%2BFTBRaFrK7W3jRyuwffxbe0LhFTGtSbPq8J7CnkjCd2OhnYNjCwaGPm1wOHxczmWG7IqPYr9xYDuFt42fbhKjfB%2FVdaXUSYKusx6OLGwgGNkxSZYgwUUfFFHzWcg8Q9YSU1Nfs%2BjCZGUhXg6yF3C8g0VK%2BxkBRi6WN8KEl%2FRMyfRUMjMlqc%2Bw4llgHbqPnRQFsTv18IXwtt8Njor%2BKfE5wb8NTQFa%2FwsyiatbQ%2FXYaGFbDUUh8RsN32NXvUB5pOK6C52ewOkagjAO2llox%2Bq526UYlwZjg%2F9FnX2hWG%2Fw0CyOhakDZMwhU06x%2BpSa%2B1R2ln3W5AJPMtxZiKit5f8%2BP%2FZL1uls1su8UvN3BE83b%2BJay8moc%2FhOCoLuJrnCNzYJ2i%2BC3g%2Fj5JzDWysTJBjqkAbspa9fCXTVR4DOGmgmhgpuTs2V%2Fs43hjF8BwwVPKUdcEi72cb0IG2cHhBK44tnfssLOVidwT2AyfvxZajg4UmwAeKdZ7CwrlKXSM8AlkjnGS7bvasHbCx1shDUf7y10o84%2BPOsULbxfYNatGuncAV7P5B%2B3XQjY%2BFXu0JpJdHI0TRQYUDIA%2Bbbp3UuEU6UU%2Fzk7%2F2sJp8L%2F6Q2fs7z7FdCWzrXu&X-Amz-Signature=ec97d818133705e69703bd31654b9e97fe2af58bbed7c11d6dbed5eb05811091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NLMU3E2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDGGy9pB8sQdNfmTdvahx21g34OPtfcnpqFbHJoCpH9vwIhAMBDa%2BAx%2BwDB9PUh%2FdH2sY9Pp1g9EHU%2BQt1GVZYtoWy3Kv8DCD8QABoMNjM3NDIzMTgzODA1Igx370h1C%2BevzSsRnQEq3AMtIBC%2BcW3TN6HxJuZ0AWgc8oF4y%2FNYM78AB2CGhuMDclZknpFPauhfa1UQz8%2BOtzoDrZBPrgC%2FTizpgjriTVxZr6gPRyJq9Ggp8vr6rMfIL3PCz%2BmASzPdxHZ4oRxplzNZNVAg1BwdyTujfsgM89zoxxmf7C%2FXWCZOfInBqEMuKW6pSzH9oKKFWXIEaa1Bmj2lq8iBI7P0j96cGD9g5U3MDUWctTb%2BxIDPnYJTml8Kj0qVZi%2BFTBRaFrK7W3jRyuwffxbe0LhFTGtSbPq8J7CnkjCd2OhnYNjCwaGPm1wOHxczmWG7IqPYr9xYDuFt42fbhKjfB%2FVdaXUSYKusx6OLGwgGNkxSZYgwUUfFFHzWcg8Q9YSU1Nfs%2BjCZGUhXg6yF3C8g0VK%2BxkBRi6WN8KEl%2FRMyfRUMjMlqc%2Bw4llgHbqPnRQFsTv18IXwtt8Njor%2BKfE5wb8NTQFa%2FwsyiatbQ%2FXYaGFbDUUh8RsN32NXvUB5pOK6C52ewOkagjAO2llox%2Bq526UYlwZjg%2F9FnX2hWG%2Fw0CyOhakDZMwhU06x%2BpSa%2B1R2ln3W5AJPMtxZiKit5f8%2BP%2FZL1uls1su8UvN3BE83b%2BJay8moc%2FhOCoLuJrnCNzYJ2i%2BC3g%2Fj5JzDWysTJBjqkAbspa9fCXTVR4DOGmgmhgpuTs2V%2Fs43hjF8BwwVPKUdcEi72cb0IG2cHhBK44tnfssLOVidwT2AyfvxZajg4UmwAeKdZ7CwrlKXSM8AlkjnGS7bvasHbCx1shDUf7y10o84%2BPOsULbxfYNatGuncAV7P5B%2B3XQjY%2BFXu0JpJdHI0TRQYUDIA%2Bbbp3UuEU6UU%2Fzk7%2F2sJp8L%2F6Q2fs7z7FdCWzrXu&X-Amz-Signature=9a9ff4535b174de6e2cafa323d5375f551fd9f0f7ed4ce6f770518c5adbaef55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

