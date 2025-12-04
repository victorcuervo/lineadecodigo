---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ57AFNX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4%2FCKNmcuoLEjNzoUm1jRn2DBx44asBXXXRjrUJ66VQAiEAzB%2BIc%2BF6RAhjGmbttRUCgbCzbg2DRmp9EHoDebFNkmgq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDFP5%2Fqg07dMCS2krHyrcA%2BV%2FNrqAx%2BAsgLn4%2FwY8favbhaVR7qW2tw0CHatLax1LB97JM1RHMNpebqvAQDP%2FS8AhZOZT8GMYbOQBHcqz1TYnQSU31vp27l58g3dvnsgCe5IujcIn6ILy6EswdLFJJpeyQzSXuKd5HF%2FI1G03DKEewqqtOczItvZRpGnqAmMkCx3WXa0nlnc8wVcqNce3oJu0t8mKXl7kh6JbZemal2YMYS93kODz6kzNyTA%2BSolxgU2vdH7mbPegRnWKqNLOipUoemvrwQh7BqpVDPSUEPb%2FH%2BkwTJs1h%2FlymlD278RIVe11R%2B9XHcjD%2BV7aTwrXJXNJ3LoxSABAoBAzu8KN8TygAL6InA28ngm%2FZeak%2FW7CxY31AqXI2IEJqhl4eO%2BQJUM1lA%2FufQm8fjpUD8mG9V6OnC56n6h%2BMq0dEGmkkQeCE4nkCmhEgWKZ5UMZ5FKoj%2FoljKGro5%2BJzKDKynKUfstaUbjhkCMo75R9qMxy5Ln6VpCuqOoxOxND%2F4w57MZBEGLeEGM%2F0LwzinMOlDcyNa6M%2BKI6mO63CkSmvh1Q5uzD02og5CRN04v9oyehuwE1WzDCdMnd7M%2FHwjUqV0VX2itf7b6lUP495AHvTzSQ7vZaRb8veZrdKwK%2BU1boMM3cxskGOqUB8epefJkJWcAmMFVYkwEJ1cqtD%2F7QIs1EF5qamZDGRApMG9EG5m7A7L3KNaEVPn2bIzrfcTtJAPkMPpnueHK1Tj4WgWYhcwh%2FUOpn%2BwaBQzOc1s07ImBKAjuMxEFNM%2FXdRAnrqqQub29HjqFyV%2Ff87bvUPmUTlnbodV%2FK3jZ1n8U2KIX736x34rRJwGwykWjvlSlFAzi2vw2ZBcRLlSAy%2FdUsS8dr&X-Amz-Signature=3d38d21d8656efb19610637fb0e4b385c2de6c444af72246d2891302fee14cfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ57AFNX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4%2FCKNmcuoLEjNzoUm1jRn2DBx44asBXXXRjrUJ66VQAiEAzB%2BIc%2BF6RAhjGmbttRUCgbCzbg2DRmp9EHoDebFNkmgq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDFP5%2Fqg07dMCS2krHyrcA%2BV%2FNrqAx%2BAsgLn4%2FwY8favbhaVR7qW2tw0CHatLax1LB97JM1RHMNpebqvAQDP%2FS8AhZOZT8GMYbOQBHcqz1TYnQSU31vp27l58g3dvnsgCe5IujcIn6ILy6EswdLFJJpeyQzSXuKd5HF%2FI1G03DKEewqqtOczItvZRpGnqAmMkCx3WXa0nlnc8wVcqNce3oJu0t8mKXl7kh6JbZemal2YMYS93kODz6kzNyTA%2BSolxgU2vdH7mbPegRnWKqNLOipUoemvrwQh7BqpVDPSUEPb%2FH%2BkwTJs1h%2FlymlD278RIVe11R%2B9XHcjD%2BV7aTwrXJXNJ3LoxSABAoBAzu8KN8TygAL6InA28ngm%2FZeak%2FW7CxY31AqXI2IEJqhl4eO%2BQJUM1lA%2FufQm8fjpUD8mG9V6OnC56n6h%2BMq0dEGmkkQeCE4nkCmhEgWKZ5UMZ5FKoj%2FoljKGro5%2BJzKDKynKUfstaUbjhkCMo75R9qMxy5Ln6VpCuqOoxOxND%2F4w57MZBEGLeEGM%2F0LwzinMOlDcyNa6M%2BKI6mO63CkSmvh1Q5uzD02og5CRN04v9oyehuwE1WzDCdMnd7M%2FHwjUqV0VX2itf7b6lUP495AHvTzSQ7vZaRb8veZrdKwK%2BU1boMM3cxskGOqUB8epefJkJWcAmMFVYkwEJ1cqtD%2F7QIs1EF5qamZDGRApMG9EG5m7A7L3KNaEVPn2bIzrfcTtJAPkMPpnueHK1Tj4WgWYhcwh%2FUOpn%2BwaBQzOc1s07ImBKAjuMxEFNM%2FXdRAnrqqQub29HjqFyV%2Ff87bvUPmUTlnbodV%2FK3jZ1n8U2KIX736x34rRJwGwykWjvlSlFAzi2vw2ZBcRLlSAy%2FdUsS8dr&X-Amz-Signature=34d3cd1b9c82ebf2ed947c1849e3d5b66137a620d041cd19d52fb860c3e2c2f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

