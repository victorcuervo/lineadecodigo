---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ2IBTVT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbk2uaQ7hqnjRiOPTKbVm7qeWoFeXGmQXTSgn5nVNPHAiEA8AV%2BRGQVsIMnIYQC%2BbQyE2y88GOyx1dxh6O6R7sqi0cqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHbIa9jhCJDahXnrCrcAxaxlNo4hBN603OUxtvdD1VJ1myUTh2ZI%2B6D%2B34VL7G4dy25Mi28Xuyk8oVSgX16kBRy7P98Ix9LBmEtTPc0rYMeRrZen%2FEJISl3OFgTIqpDNVGP6SJRVqKHUHefdlo7BkhUMbLfjPv1U6mm2fMPH2RuM55PM6XhAmEhneb1Dl%2FlsxjzMqAch2NBqoUywSNM%2FVPm%2BIfzLwKkzJwgKf3qKMulibBaniphPk81aas62YpeiZD1OpwQKcKVuqF%2BGVIbW1MEee9lQB9G0ebpFuaqEOrKCf1yiN6evDaXQOmwRpyoM9ifih2AZ4za8qC%2Fj0Imas64EiQIZpzNBm9HA2nL%2FGh6LjZJ3%2BIcxdgek0VsoXxmkpHHgGQJQr6aZQ9ecauK5%2F%2BcTxvKHU%2BUCDwq%2BeZC%2FtYPnWWL2AaG6dwIXZq%2FHSPeGomO9M6oYMuCMCp6BLVBc13gXmXGUd8tDNN4zqEgiQrHNRH%2BSgW7x%2FnU85mrdH189Ggls8Ek5wvcfXYFEXpibJTDWqyonPa54NE%2BvjtHnIS6bgzn6aSjo1dLVbFNC5bTAe6ep2CxcQdaRJtMyxC95hA4rGG1vVIRkLIeZTGFU7gMphDELsJqIZEi6PBP7PJktl48U1Uj2r%2F9UusAMPqG3MkGOqUBa1Rn48ELDJwql64k60tOrUZ5%2F1%2BZJhqtaEvpvARwYwf6vnbqlsIbOxvLtvkKHPemMFhXpTqukLsObGg6%2FM8bijyp3vCfEn4OsIQs9%2BTBp3zOaxPsbD7tUQL%2BdRxnR9lXRzTBwZodixAy5NsEehgoXGRAI6DQpFCoqcOCDldsGKu6sV7rGUfrtMxaU3N0E%2Fh3FJImA9rVw%2Bzu6FiNmMoOtCet6Swo&X-Amz-Signature=9cfdb7308eac758f2543d09c09135dd92f1598a57be5b55587d30bb4778fa113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ2IBTVT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbk2uaQ7hqnjRiOPTKbVm7qeWoFeXGmQXTSgn5nVNPHAiEA8AV%2BRGQVsIMnIYQC%2BbQyE2y88GOyx1dxh6O6R7sqi0cqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHbIa9jhCJDahXnrCrcAxaxlNo4hBN603OUxtvdD1VJ1myUTh2ZI%2B6D%2B34VL7G4dy25Mi28Xuyk8oVSgX16kBRy7P98Ix9LBmEtTPc0rYMeRrZen%2FEJISl3OFgTIqpDNVGP6SJRVqKHUHefdlo7BkhUMbLfjPv1U6mm2fMPH2RuM55PM6XhAmEhneb1Dl%2FlsxjzMqAch2NBqoUywSNM%2FVPm%2BIfzLwKkzJwgKf3qKMulibBaniphPk81aas62YpeiZD1OpwQKcKVuqF%2BGVIbW1MEee9lQB9G0ebpFuaqEOrKCf1yiN6evDaXQOmwRpyoM9ifih2AZ4za8qC%2Fj0Imas64EiQIZpzNBm9HA2nL%2FGh6LjZJ3%2BIcxdgek0VsoXxmkpHHgGQJQr6aZQ9ecauK5%2F%2BcTxvKHU%2BUCDwq%2BeZC%2FtYPnWWL2AaG6dwIXZq%2FHSPeGomO9M6oYMuCMCp6BLVBc13gXmXGUd8tDNN4zqEgiQrHNRH%2BSgW7x%2FnU85mrdH189Ggls8Ek5wvcfXYFEXpibJTDWqyonPa54NE%2BvjtHnIS6bgzn6aSjo1dLVbFNC5bTAe6ep2CxcQdaRJtMyxC95hA4rGG1vVIRkLIeZTGFU7gMphDELsJqIZEi6PBP7PJktl48U1Uj2r%2F9UusAMPqG3MkGOqUBa1Rn48ELDJwql64k60tOrUZ5%2F1%2BZJhqtaEvpvARwYwf6vnbqlsIbOxvLtvkKHPemMFhXpTqukLsObGg6%2FM8bijyp3vCfEn4OsIQs9%2BTBp3zOaxPsbD7tUQL%2BdRxnR9lXRzTBwZodixAy5NsEehgoXGRAI6DQpFCoqcOCDldsGKu6sV7rGUfrtMxaU3N0E%2Fh3FJImA9rVw%2Bzu6FiNmMoOtCet6Swo&X-Amz-Signature=2fcf67c3c73ed5af4baf4126143b74cdf68b0a3e77f8dca33bcbab98e8d89e92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

