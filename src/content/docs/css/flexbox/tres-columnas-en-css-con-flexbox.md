---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQU45KVS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T065218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg4Dv0Lk6hMp67ujorVN6Cne9shZHdqncAzZVCt7dKxAIhAMAsQf4RY%2BhWoWuGxdwFl5IP4r419bClEWtbGL%2BU8Q8dKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZwAvoubtCRnQKZFkq3AMwZ5gLFw1HIAGL1BK5%2F%2Fe6spEZcxtQ%2F%2BFjcy%2Byf3XioWFF8WuMmdaEYF1unrXdxqE0Yze6KY%2FtctTH3GZkBwxY%2FJAOifPPL7l51hyEumFAld7HFMieRjXrCoOzbKA2gxeS2UY28Jg%2B%2Bb6GT%2B2xFlDEuFXn3zUsxFgNFli8nYP5YkQQu3cdmHIeE6CPWCSgAzYnyAE2hpSDT1lmiCqsD%2FAnpYay3bhs1ZVT5q%2BZItTnyQXbtPAbcluaxJS67GV0%2FeWrFClX0Ov8T6DKCNycC3%2F7t70%2BmmBQp6SxHgHPHZvU924xksRTz9ixnL8bsE7juCmEJQrH9UFNOun6IznpWNGA73NzotA7msa3TAd4lSEWzTMLn4Xm4jgZETqQm43aMNyNd3dyI%2Bq64veYTGLhBc9cbyY9Gy%2Fi%2FQXG5%2FpUiSdjQzBqb%2Bye587QlDb%2BQk3IJHq1sJpYDb0jcYtCEwnQYj4DZomaUp%2FYo%2BqEUIMI%2FEpAsorMysSFybdsN%2BNc7jWIzbEgyUi6jUB5msxKGZcSOzv1GBqi4gOYbEGy%2BfUhfp3nVdPLg8tuDQugEQtbFXDMgKeVh3e71ZcLO5pq1v9lbYtVxqkPvbzuE9%2FETvx0bi%2FgvQdrP9PNyE8RZNKE3zCY0NnJBjqkAaCQrX%2FYcpVl%2Fgaf9QUP1yJIT0zqabo8ZpsX2XVJ7JwOjiSImm%2BVmCmSnDHbCcTanDoP7YdJ4DForARFxtNZkrUFWPxNXpj2x1fjdAu6xc4ns8nRTxaIw8HPiyAjd16F9iVPdh5yp%2Fifh0%2B038E35BRKsRsiRYssGj1TlomU%2Bb30LeDN4yp3BxiidHmrT1QY%2Fi%2BLgrJH%2Bb9mkFcm%2BrSwM6eQVFfv&X-Amz-Signature=27771a4fce42091f0c3040c73b988c848724965901a1c2f090c4bd3bad6c0976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQU45KVS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T065218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg4Dv0Lk6hMp67ujorVN6Cne9shZHdqncAzZVCt7dKxAIhAMAsQf4RY%2BhWoWuGxdwFl5IP4r419bClEWtbGL%2BU8Q8dKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZwAvoubtCRnQKZFkq3AMwZ5gLFw1HIAGL1BK5%2F%2Fe6spEZcxtQ%2F%2BFjcy%2Byf3XioWFF8WuMmdaEYF1unrXdxqE0Yze6KY%2FtctTH3GZkBwxY%2FJAOifPPL7l51hyEumFAld7HFMieRjXrCoOzbKA2gxeS2UY28Jg%2B%2Bb6GT%2B2xFlDEuFXn3zUsxFgNFli8nYP5YkQQu3cdmHIeE6CPWCSgAzYnyAE2hpSDT1lmiCqsD%2FAnpYay3bhs1ZVT5q%2BZItTnyQXbtPAbcluaxJS67GV0%2FeWrFClX0Ov8T6DKCNycC3%2F7t70%2BmmBQp6SxHgHPHZvU924xksRTz9ixnL8bsE7juCmEJQrH9UFNOun6IznpWNGA73NzotA7msa3TAd4lSEWzTMLn4Xm4jgZETqQm43aMNyNd3dyI%2Bq64veYTGLhBc9cbyY9Gy%2Fi%2FQXG5%2FpUiSdjQzBqb%2Bye587QlDb%2BQk3IJHq1sJpYDb0jcYtCEwnQYj4DZomaUp%2FYo%2BqEUIMI%2FEpAsorMysSFybdsN%2BNc7jWIzbEgyUi6jUB5msxKGZcSOzv1GBqi4gOYbEGy%2BfUhfp3nVdPLg8tuDQugEQtbFXDMgKeVh3e71ZcLO5pq1v9lbYtVxqkPvbzuE9%2FETvx0bi%2FgvQdrP9PNyE8RZNKE3zCY0NnJBjqkAaCQrX%2FYcpVl%2Fgaf9QUP1yJIT0zqabo8ZpsX2XVJ7JwOjiSImm%2BVmCmSnDHbCcTanDoP7YdJ4DForARFxtNZkrUFWPxNXpj2x1fjdAu6xc4ns8nRTxaIw8HPiyAjd16F9iVPdh5yp%2Fifh0%2B038E35BRKsRsiRYssGj1TlomU%2Bb30LeDN4yp3BxiidHmrT1QY%2Fi%2BLgrJH%2Bb9mkFcm%2BrSwM6eQVFfv&X-Amz-Signature=da1afb83fa44ee3b3101c2b3234bb970c38ca0d84fdedfe0a559b8178bb09410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

