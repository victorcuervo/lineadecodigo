---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZFZHM67%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCWgoCtEF8w%2Bd5GtOILFJ3hbU2lY1SFFtvHbujMr5gsEwIgZIYZNXKOIUPJ3T5F%2FUARCOMsM93U1yzlK1OurGWD1DQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDErBb7djxXT%2FmlYNJCrcA53VQbGwg8lsa%2FimRyipEjPOWVXOQ03zbQ%2Fiko%2FC0iUEWaz%2BREqKPED1AevLoiMsvJUT8odlG7q76pu5%2FPuNDHquEIqvg6My55OCKIfDAghLhRKu%2FeGq2yVQ%2FbK2QZg5MezpHpIkGct7fdBPbO0aEZ9bP7aVDllUOZgTxeKVmlM98DDf9t3Qnp6jPRWO6Ssm1AqCKTlA1dqnxVv%2BgmPjs7B3aFyioJ04tyeAIUPr%2Fa3kLC7GaEzsP4qkYWNKmJJcVIR3MsIQDphe1aRaTzBR7R22MhMn4LNfmbhW4%2Fb%2BcdmaJmhUAWV98Uk3qkYhg%2B1MpIf1AGAOIrKPQ%2BLEWI7hXpnplfAmDkHQ2RbBLQ4%2FHVsJkWJwaPL01KUfJtAiZmh%2BHRnb70QRrhUSgqcsrIps%2FP4iW85XpUTyN377wddBj80254X7WoMjq8B3lgkW7rlCwD7TdCjnC4mDWY4kJWc44SbXZVENUqvejgrTzChFERZ3EO7%2BUGgHCoCotcSJC0KIgiMwvI3hDbSRxDMdHWlsfjWI6ozGzNKV3hxSapK5skD83vmyu%2Bgc%2BYbq8Z1r1Zhs0XIF0tdsFTrSVy%2B1ZaMOlUmgLO%2FtnJWLj8QUCJ6JG3Wo3WxiOgw2V904qytOMJKExskGOqUBBCjlIzguT3E8ODVu71eIzFCZBfRhO4W17ri5PXRBHm1YaiLRnjicZ8a5ukc8uOpZk85YAiVzxlFgX03abdKtSKTO5VYJoRiQ8rAIMeY0tNmK%2BSU6h86tGlUn%2FKyG%2FK9URa80KrKKKzgWycdXvWeSXdECFDIUJpJIvjIrpHuP4W4DRo57zIox9kmk2pu4AKLTmyxBSWHjhRNNqXMDMaKGIr6GOpRx&X-Amz-Signature=1088b297c499af5431d76e9adcbedd9d429d28883f28a05f5961e0223f339afe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZFZHM67%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCWgoCtEF8w%2Bd5GtOILFJ3hbU2lY1SFFtvHbujMr5gsEwIgZIYZNXKOIUPJ3T5F%2FUARCOMsM93U1yzlK1OurGWD1DQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDErBb7djxXT%2FmlYNJCrcA53VQbGwg8lsa%2FimRyipEjPOWVXOQ03zbQ%2Fiko%2FC0iUEWaz%2BREqKPED1AevLoiMsvJUT8odlG7q76pu5%2FPuNDHquEIqvg6My55OCKIfDAghLhRKu%2FeGq2yVQ%2FbK2QZg5MezpHpIkGct7fdBPbO0aEZ9bP7aVDllUOZgTxeKVmlM98DDf9t3Qnp6jPRWO6Ssm1AqCKTlA1dqnxVv%2BgmPjs7B3aFyioJ04tyeAIUPr%2Fa3kLC7GaEzsP4qkYWNKmJJcVIR3MsIQDphe1aRaTzBR7R22MhMn4LNfmbhW4%2Fb%2BcdmaJmhUAWV98Uk3qkYhg%2B1MpIf1AGAOIrKPQ%2BLEWI7hXpnplfAmDkHQ2RbBLQ4%2FHVsJkWJwaPL01KUfJtAiZmh%2BHRnb70QRrhUSgqcsrIps%2FP4iW85XpUTyN377wddBj80254X7WoMjq8B3lgkW7rlCwD7TdCjnC4mDWY4kJWc44SbXZVENUqvejgrTzChFERZ3EO7%2BUGgHCoCotcSJC0KIgiMwvI3hDbSRxDMdHWlsfjWI6ozGzNKV3hxSapK5skD83vmyu%2Bgc%2BYbq8Z1r1Zhs0XIF0tdsFTrSVy%2B1ZaMOlUmgLO%2FtnJWLj8QUCJ6JG3Wo3WxiOgw2V904qytOMJKExskGOqUBBCjlIzguT3E8ODVu71eIzFCZBfRhO4W17ri5PXRBHm1YaiLRnjicZ8a5ukc8uOpZk85YAiVzxlFgX03abdKtSKTO5VYJoRiQ8rAIMeY0tNmK%2BSU6h86tGlUn%2FKyG%2FK9URa80KrKKKzgWycdXvWeSXdECFDIUJpJIvjIrpHuP4W4DRo57zIox9kmk2pu4AKLTmyxBSWHjhRNNqXMDMaKGIr6GOpRx&X-Amz-Signature=e16221eb6a9cd63716ad956d113e17459c39135c30ce7993717ce2f6c543be1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

