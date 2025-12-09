---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEI2FUEE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBx747NHtfN%2F6McE8fiJ0iWnEf4kMiqICPqHOWBP09ZvAiAWYax8Ket4%2Ba2aZfCqOsrFoOQDwtgHkM7V7gCiZMb66yqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGInmOUgXTRypI6YvKtwD4LFHenDZkmPiiaK45SZPWzLlINzSEvR8HMkRnkhfplcV5F2YQVh0YM4Bs6CRfLrep0gsrdwKOFMRQ4rR6VraYxnbPjVzHw8XmdoR8Wi5BkGIIeKRDWbvQasTVEBf%2FAMN%2B20o30NDeT%2F1KLuqbJXyZKVr0PhkXSkFJLuDUKmwDiK%2FVDdWsnbHLmSG6MO44rOcUFDURnicbOyVapmdHkTkEfOvM8nti6cfuG%2F%2BYh8zm05W7TOoSjdsurzbD2LPMtmYtAU7GcF5bMMhJG%2BgAL5JHInQNU4O%2BLMlVhzvPm66rmLJ7QGGruXFwtnrFgG63cDaLHVPo3GDOaIsCC5H2f1o6DDrwehpxTBDImiQbh2syyoLF012umm0dAh2NIGngY2hV6XAc1dDua%2BGOaCRQ0gzjdDWReUBXBhQsSiJfC8b8sXltuEamNPhrVFt%2FlANUwtCvXTxSsWUsaeEE4aejTPL7w9rtCPWBjwq1kknBoXgm%2BgGnoD4orQ9boMAteRKtIirL4lzCr%2BrjLTO%2BbFSClIOpK0slQh%2F0grfOMOIhBdAZOXMohMGZSQWY1WrAcBxCHzvffSPd916Rw7YvEE7%2BEPqeG83SGPSGp2uMTKPNc%2FTqCFuKhyEKLS7Vj0XgLUwooffyQY6pgH0jJCpH%2BBApm%2FMohJTfpp7DAkQr3vdbEmDmUFLXmCNAa7%2BLYmtqJZbVCi7IlmsBrhS7pIWsz%2FDNggkgNMNbBoWIbzoY3VyfIqWo3%2B3VPs6Ni7X0jOscYhuykrJVoW9F0MFrU10PvpxwyyKHk9q6VGyH0WK8ZylxwjvF9qphM6%2BqqGjJpoZqC0aqAoEfQfl59LK7UH4Pba7Fz4Sao3ystrO379P4vLh&X-Amz-Signature=ae0e4e9f28f16749ebb7a8b3b17f51968b5b32fd05ab794211fd469f09720816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEI2FUEE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBx747NHtfN%2F6McE8fiJ0iWnEf4kMiqICPqHOWBP09ZvAiAWYax8Ket4%2Ba2aZfCqOsrFoOQDwtgHkM7V7gCiZMb66yqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGInmOUgXTRypI6YvKtwD4LFHenDZkmPiiaK45SZPWzLlINzSEvR8HMkRnkhfplcV5F2YQVh0YM4Bs6CRfLrep0gsrdwKOFMRQ4rR6VraYxnbPjVzHw8XmdoR8Wi5BkGIIeKRDWbvQasTVEBf%2FAMN%2B20o30NDeT%2F1KLuqbJXyZKVr0PhkXSkFJLuDUKmwDiK%2FVDdWsnbHLmSG6MO44rOcUFDURnicbOyVapmdHkTkEfOvM8nti6cfuG%2F%2BYh8zm05W7TOoSjdsurzbD2LPMtmYtAU7GcF5bMMhJG%2BgAL5JHInQNU4O%2BLMlVhzvPm66rmLJ7QGGruXFwtnrFgG63cDaLHVPo3GDOaIsCC5H2f1o6DDrwehpxTBDImiQbh2syyoLF012umm0dAh2NIGngY2hV6XAc1dDua%2BGOaCRQ0gzjdDWReUBXBhQsSiJfC8b8sXltuEamNPhrVFt%2FlANUwtCvXTxSsWUsaeEE4aejTPL7w9rtCPWBjwq1kknBoXgm%2BgGnoD4orQ9boMAteRKtIirL4lzCr%2BrjLTO%2BbFSClIOpK0slQh%2F0grfOMOIhBdAZOXMohMGZSQWY1WrAcBxCHzvffSPd916Rw7YvEE7%2BEPqeG83SGPSGp2uMTKPNc%2FTqCFuKhyEKLS7Vj0XgLUwooffyQY6pgH0jJCpH%2BBApm%2FMohJTfpp7DAkQr3vdbEmDmUFLXmCNAa7%2BLYmtqJZbVCi7IlmsBrhS7pIWsz%2FDNggkgNMNbBoWIbzoY3VyfIqWo3%2B3VPs6Ni7X0jOscYhuykrJVoW9F0MFrU10PvpxwyyKHk9q6VGyH0WK8ZylxwjvF9qphM6%2BqqGjJpoZqC0aqAoEfQfl59LK7UH4Pba7Fz4Sao3ystrO379P4vLh&X-Amz-Signature=2db2ec98f5b9d3e667538002bc2061a3165bc4bcf0d89145ff06dfb416b6158b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

