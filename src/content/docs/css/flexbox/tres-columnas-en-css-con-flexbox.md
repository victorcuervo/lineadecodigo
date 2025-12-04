---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YES5WF3S%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCsHuK33BvKn1aDfB5IEurUvzftLLx8XhW0UahvB7rVBAIhALa%2FKKKt0l9bIthy1NPzMdzKTAPvJR0uTG7JTZDxc0puKv8DCDoQABoMNjM3NDIzMTgzODA1Igw6x0J6TDGKZx4wt9Eq3APBKxuwwCoA%2FRxd1pHWh0inYDHhp4wtMllmwSEiHUWSGoAb2zM2M%2B3KwddBryTLzJdXk8CDVxO71Bcth8x4zi5WGrTtaz8U5QucpMhomgpkJyB4atYKCYFTpQ2%2BbfftOe7yCRPFVPNWfe8KTJMEyP8aSCOZDOM3s9vPXn83WDQ24VEvCWV7ACfpURTFUYMbk5ZKj82MlHF0WQuW8Qa5wcxxUsQDq917twJMyZMeB8pA481NCj1wENoSV%2Fehx4twxz0E4YenE98Ux8If4qjg8JTr03pQJQZEZNHMdgJO8FbYV%2FJG9MwLSTj4veueIJq8UtcQ%2BfoN8g%2F1TR%2Bz9ifIXz%2FtgRIU6WHKCV7crpSY0UKnkQWAaARFhcuLLaM7w6d5ensDQs9RSU9foofl0%2FvVYieEaZ%2BKcOPCBz3Xi3HV0j2iOonOCRRPUYEsR9U7pDHMltk6wLOs3Yv76B0sXJQMm2ZHa0GnbOVofuexJ3J6sXu9m6yWMtLHpIW2zNrP579z4MTVTEKDFAgfKGtzr%2F0z%2F0Zh%2BOgWNhVGHpcXrJZN2Ax2Pns4HybKMgrJ2isGDYqT60s5Lb5%2BNCZAzdxWDktqpZcDUvvGpRnPrIGNfXCXr20AvWMy3ADDRBBOuPsBFTCStMPJBjqkAXEx%2B5GHUXCDDOsp%2F3xTqBuzDOfIZ41FTq57ii8o5mCyy7eM2p%2FbaK%2BpquVWgQI5SLYib69HNnoP96XF7p4miN28v4CDAplJcUQvvxgJt%2FxXZPcSMpC4gXlic2gLzsygEiGs6Lyg99SSyGdqUoxtEjWgrJa44ssPZOja%2BabXz9DS4kBILV2YFc6NEMwQx%2FVfEDFEgIJFiigcPbrcsyMfezzlSzGM&X-Amz-Signature=c08cead0829a5d8b41af178c4fef68f5a18b50b30b4de87ed0331c21a147b262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YES5WF3S%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCsHuK33BvKn1aDfB5IEurUvzftLLx8XhW0UahvB7rVBAIhALa%2FKKKt0l9bIthy1NPzMdzKTAPvJR0uTG7JTZDxc0puKv8DCDoQABoMNjM3NDIzMTgzODA1Igw6x0J6TDGKZx4wt9Eq3APBKxuwwCoA%2FRxd1pHWh0inYDHhp4wtMllmwSEiHUWSGoAb2zM2M%2B3KwddBryTLzJdXk8CDVxO71Bcth8x4zi5WGrTtaz8U5QucpMhomgpkJyB4atYKCYFTpQ2%2BbfftOe7yCRPFVPNWfe8KTJMEyP8aSCOZDOM3s9vPXn83WDQ24VEvCWV7ACfpURTFUYMbk5ZKj82MlHF0WQuW8Qa5wcxxUsQDq917twJMyZMeB8pA481NCj1wENoSV%2Fehx4twxz0E4YenE98Ux8If4qjg8JTr03pQJQZEZNHMdgJO8FbYV%2FJG9MwLSTj4veueIJq8UtcQ%2BfoN8g%2F1TR%2Bz9ifIXz%2FtgRIU6WHKCV7crpSY0UKnkQWAaARFhcuLLaM7w6d5ensDQs9RSU9foofl0%2FvVYieEaZ%2BKcOPCBz3Xi3HV0j2iOonOCRRPUYEsR9U7pDHMltk6wLOs3Yv76B0sXJQMm2ZHa0GnbOVofuexJ3J6sXu9m6yWMtLHpIW2zNrP579z4MTVTEKDFAgfKGtzr%2F0z%2F0Zh%2BOgWNhVGHpcXrJZN2Ax2Pns4HybKMgrJ2isGDYqT60s5Lb5%2BNCZAzdxWDktqpZcDUvvGpRnPrIGNfXCXr20AvWMy3ADDRBBOuPsBFTCStMPJBjqkAXEx%2B5GHUXCDDOsp%2F3xTqBuzDOfIZ41FTq57ii8o5mCyy7eM2p%2FbaK%2BpquVWgQI5SLYib69HNnoP96XF7p4miN28v4CDAplJcUQvvxgJt%2FxXZPcSMpC4gXlic2gLzsygEiGs6Lyg99SSyGdqUoxtEjWgrJa44ssPZOja%2BabXz9DS4kBILV2YFc6NEMwQx%2FVfEDFEgIJFiigcPbrcsyMfezzlSzGM&X-Amz-Signature=a37b5f7bca097f1b263ecb46c44c78ae203c455eb4a7d1c58a079cecb5f47de4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

