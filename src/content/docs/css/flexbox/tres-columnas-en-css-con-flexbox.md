---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MKPGOUW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDcNu4zJc8yEKZtXmSvEUn%2Bt2OXQAmmteAF16VSDiz0jwIgbMGZyPlHYC9rPeHW14n0wyKNgH%2BmtnvqxtlEowRYVoUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDH%2BWiS0%2Bwx%2BIN1nTiSrcA5iAk%2FApBPsEW1G%2FycgpB2eXy0Klc0HkH%2FQP8F0FFYyJVOGp2U1Hxrm%2F7WrNjrsSHel8LGaQ5kSsrSv1oVT%2FpBL8h8%2BAaU0ozjcUvZiJbl6SOBJJL7nbmKUaXT90GTe6wS7PEqsrU9Ky%2F3W%2FmqEUw6mmLBfKW3%2F1aX8uCL%2FF0uKj4AqDHAtC6D0vhwnWI%2BSIlN%2Fbamj7HCjv96xpCpjjveIwAo4lcnxsaIQ5E%2FHdResv7dii26ELLJd5ZHFTxMnahF5oMd3NS2u%2BExmmIGZ2d453pLxs9RcvghmeIT9ybxC00nMP3W2ANXfli0VV353Tp1jrk1aHQ4mP7DyrRrLEtTZ38F00qCGFdmaNzHoIXwAF106m8xFENRLj%2FoUh7cEI2cXOBYnwhUfDrBxt2bqEBUgabnDMuVlKcPTEMuyrrr34fjm7qohp1orcQeWBEtax8LN0CcjZi8D1L3J5Jw3NcYicAAXQOfKj0L5Cc6qO8ueOgotHZbeZ0XHIKxnYbiGdrNgtuUhkheQdNP6oEp1JDqXqn659LuSi7TI9JEyfqp4vq3ez%2BexH74sa18Dm7qjGllzi7XHFr31LX6WXk1UtsDcoGF9tILXOGqWEx%2FaKEK%2FR9qq57YnpxffOzm%2BgMLCDxskGOqUB6FH22SP4iqEJH6%2FB46g%2Fb0pZfnT282rHNsHAy5bs5%2BlyCrP%2FD4tWJ4lOJpA4yhybubjm9mppLaPLC37ZMJIWe6kqeVfonA6uQdaVXjN9rXJR2bbIM2OuvpOqxp0wqUjk9ST0JlQR2Fh7OZdcFcNTONlXjSt7vRkkMD9SwbTU6XiQPnNHBU%2FEstQ79XXkqpetJAUKp6xJSAGWwUw4RlBIDoDLyrTP&X-Amz-Signature=e4aa77b2162ef171586654832eb6a0958b62b0a55ea7eaf6ddfab874da1b445e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MKPGOUW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDcNu4zJc8yEKZtXmSvEUn%2Bt2OXQAmmteAF16VSDiz0jwIgbMGZyPlHYC9rPeHW14n0wyKNgH%2BmtnvqxtlEowRYVoUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDH%2BWiS0%2Bwx%2BIN1nTiSrcA5iAk%2FApBPsEW1G%2FycgpB2eXy0Klc0HkH%2FQP8F0FFYyJVOGp2U1Hxrm%2F7WrNjrsSHel8LGaQ5kSsrSv1oVT%2FpBL8h8%2BAaU0ozjcUvZiJbl6SOBJJL7nbmKUaXT90GTe6wS7PEqsrU9Ky%2F3W%2FmqEUw6mmLBfKW3%2F1aX8uCL%2FF0uKj4AqDHAtC6D0vhwnWI%2BSIlN%2Fbamj7HCjv96xpCpjjveIwAo4lcnxsaIQ5E%2FHdResv7dii26ELLJd5ZHFTxMnahF5oMd3NS2u%2BExmmIGZ2d453pLxs9RcvghmeIT9ybxC00nMP3W2ANXfli0VV353Tp1jrk1aHQ4mP7DyrRrLEtTZ38F00qCGFdmaNzHoIXwAF106m8xFENRLj%2FoUh7cEI2cXOBYnwhUfDrBxt2bqEBUgabnDMuVlKcPTEMuyrrr34fjm7qohp1orcQeWBEtax8LN0CcjZi8D1L3J5Jw3NcYicAAXQOfKj0L5Cc6qO8ueOgotHZbeZ0XHIKxnYbiGdrNgtuUhkheQdNP6oEp1JDqXqn659LuSi7TI9JEyfqp4vq3ez%2BexH74sa18Dm7qjGllzi7XHFr31LX6WXk1UtsDcoGF9tILXOGqWEx%2FaKEK%2FR9qq57YnpxffOzm%2BgMLCDxskGOqUB6FH22SP4iqEJH6%2FB46g%2Fb0pZfnT282rHNsHAy5bs5%2BlyCrP%2FD4tWJ4lOJpA4yhybubjm9mppLaPLC37ZMJIWe6kqeVfonA6uQdaVXjN9rXJR2bbIM2OuvpOqxp0wqUjk9ST0JlQR2Fh7OZdcFcNTONlXjSt7vRkkMD9SwbTU6XiQPnNHBU%2FEstQ79XXkqpetJAUKp6xJSAGWwUw4RlBIDoDLyrTP&X-Amz-Signature=5bd666e973fdb770fa02f3e48e790ef2e22793a8adc17f69e7d26b09054c1f26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

