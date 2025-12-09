---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZRAOU3V%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyTF9tqmXuzeVdoXJiD9LIQEazRmgB5%2BXaeVmXaNEW1AiEAuka9x0aS7Po6CgRfgFP7F8qoVaJSBiJ2kEghEx7Z%2BIUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsjGFgeAY1P96MZoyrcA1%2BwhcrlyCShlGw%2FWUzEC6Dd79r14zSLKchajpQZdmcKY5IYSUMuDhK8gOtKgxvzh%2Fuiy3kO2guIGaS4a0VNXz1n7t0vL%2BN8kE6xi5tj9Xqe7cYz%2BYGdeg3QoRJmykVqdd%2BFek1%2FU9fBNu65Ct9j0bHVqqBTFMuVTAhPTqPfqq%2Fjjg3mQ%2BWE6wmAzcUH9PvYi0m%2FMOMDHYO2ajBzcIY53gxDykcU%2B7ILLtF2S0Lb2rHAL%2FvieHAk1XaPYgWVvNf7kI4pB4rRpwx3wCwHelw9dqbQkhcK%2BYdRkjWdOCNAGrcMNlvxQmWZMfPuxqEJHYP8fYFYFTeqEXETsFfIaT1uhDCn7hupJBqRRjIWeRRxdi4s4Ky2PYy1%2Fysaz1e13vsiyX3n4o3NxDN7wz45n8r1XUTMWlFphB9N2OBzQgEu5iBu0GL8uFdqo5BOzuO2O5DI9wZ7qehzLF5rl%2FEU0XD%2BFpqsCfg0pi7tJMkM0sctaHMs%2Fc6jCVfKLOKpQ5v%2FNr%2Fe4gIaxqoMDALwQy0xma6FG9CJyGORneU%2B9lG6fjrxcSdzzdvsmzMzpbDXbWBxfkISqduKmIyOZuRN1Tsf9xxhipQNGGCoQ6mLUSZ6YqDRjs%2BHwBNUVerX3HXN15meMKfD3ckGOqUBEKBjf2WKHEo9JQcsySqdTPD7EuDra1SsKlFS4SRH6zH%2BXytQ%2FA8EFgeL1FehiBtG2C%2F7dQrZmzn9YKyI39AdiizM9N8q6migzaBJ%2BNNQFFm35yIqIz259S7UgRfALiaqZReaKRBcNM6SLsetrsQkMYbbGrlHrKPkzL3Ty36ZRe4MDDupPC5WqV5P6gdCKKq0Ljd2GW3BQRJ0gTj2S%2BiDxkgNYWtR&X-Amz-Signature=1472b3f23b159e8b5d62ea4ffe4f745b6fbe26ecab4b413ca456d4f86bcfdbee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZRAOU3V%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyTF9tqmXuzeVdoXJiD9LIQEazRmgB5%2BXaeVmXaNEW1AiEAuka9x0aS7Po6CgRfgFP7F8qoVaJSBiJ2kEghEx7Z%2BIUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsjGFgeAY1P96MZoyrcA1%2BwhcrlyCShlGw%2FWUzEC6Dd79r14zSLKchajpQZdmcKY5IYSUMuDhK8gOtKgxvzh%2Fuiy3kO2guIGaS4a0VNXz1n7t0vL%2BN8kE6xi5tj9Xqe7cYz%2BYGdeg3QoRJmykVqdd%2BFek1%2FU9fBNu65Ct9j0bHVqqBTFMuVTAhPTqPfqq%2Fjjg3mQ%2BWE6wmAzcUH9PvYi0m%2FMOMDHYO2ajBzcIY53gxDykcU%2B7ILLtF2S0Lb2rHAL%2FvieHAk1XaPYgWVvNf7kI4pB4rRpwx3wCwHelw9dqbQkhcK%2BYdRkjWdOCNAGrcMNlvxQmWZMfPuxqEJHYP8fYFYFTeqEXETsFfIaT1uhDCn7hupJBqRRjIWeRRxdi4s4Ky2PYy1%2Fysaz1e13vsiyX3n4o3NxDN7wz45n8r1XUTMWlFphB9N2OBzQgEu5iBu0GL8uFdqo5BOzuO2O5DI9wZ7qehzLF5rl%2FEU0XD%2BFpqsCfg0pi7tJMkM0sctaHMs%2Fc6jCVfKLOKpQ5v%2FNr%2Fe4gIaxqoMDALwQy0xma6FG9CJyGORneU%2B9lG6fjrxcSdzzdvsmzMzpbDXbWBxfkISqduKmIyOZuRN1Tsf9xxhipQNGGCoQ6mLUSZ6YqDRjs%2BHwBNUVerX3HXN15meMKfD3ckGOqUBEKBjf2WKHEo9JQcsySqdTPD7EuDra1SsKlFS4SRH6zH%2BXytQ%2FA8EFgeL1FehiBtG2C%2F7dQrZmzn9YKyI39AdiizM9N8q6migzaBJ%2BNNQFFm35yIqIz259S7UgRfALiaqZReaKRBcNM6SLsetrsQkMYbbGrlHrKPkzL3Ty36ZRe4MDDupPC5WqV5P6gdCKKq0Ljd2GW3BQRJ0gTj2S%2BiDxkgNYWtR&X-Amz-Signature=88c046cc6cfc73a3aacfcc85abcb3ab9c0977430b80f8177f10edca2946aad11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

