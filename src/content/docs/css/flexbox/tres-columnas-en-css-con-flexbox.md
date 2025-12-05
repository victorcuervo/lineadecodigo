---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNTLNIL6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T131611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7vI0DOBzAleteDGbC5E5c8iQnnrLAEznY1N6rA6jpugIhAKEEFfKl5TSLPpwwmJmOCQUeuOCg4IeO%2BvNYm353q%2ByzKv8DCFsQABoMNjM3NDIzMTgzODA1IgxTCs9dGG5oM%2FTlJ7wq3APcm9brsq3DQUNh%2FxC3BbkBNsNw6U35%2FEXn0bK8KNPkhMzsVVbsAqc9oM3SAKTh9o6KYw6OE7iNvUxAU76EbpCXqPV8yKsUCcozx9%2Bu2gbJltoDxb99mZSegB19Ie%2BXnC93iv6NhncQxhl2JxZGdnNcdSUElGviLZP7khFxzoQHkWP5pN9BaS3tpXLBibFkdeMeRsoLA0dSxS2zSUMdm03nQeBy5bz6LPYUioUpRQZ9cJt%2FrVMEV0ywNLFiIKHYfi3GPuRofZcZQ8ZNfJvhk43XQ8IqgQ9QHqr7DTBjTVXPxCi7o70Xiib4F15yhBs7r%2F7Lyxr3JNpFr7HsBKTrsIRTNCucnrsh4sJyZuQPLhDznCeHeSgIwmNfO43xa050yGD%2BusmK0rCERB4sDzN6WoL%2FTxxwqbHyHB8C5RaelGiFZErsevZ%2B5ghUGB2IAC%2FBSSKs7mAuAOIxEIfatcF3liYX345FKaqhpWKJckc7JG4qQq0UUjhzECmx33sp1HzeCQ1oqBGPoSgXuuBTf8QjNVW0Y7uFNLcXRg1QvMsDBoBaRk9wKlfxkylA0YPtc6LbSNnmhQbYjheEEuThlAJ60hq4I8v2272OYC%2B5uQvWegi2MSCe9MqBtc4gORdmMTC0y8rJBjqkAUfpY9tbjP4yqT6pJbsqiM6og0RXBzNq%2B4DAx3%2FbqY0D5Mk0dxRuINKVsZk0HBVVDkxdMNU%2FYb9kIrnPz%2BY0Y9fHEyH2zOdS7Xa8pbqAOlm3K9kRPaixqwlPg3SGNGuadfRcY3NPDV%2BUp%2B6w4TadDrLqytlfyxUqyahaLR1irAUzDa8JHE8g34uX9wFIKsn68dZtj%2B4eDNqSY4wgPiTlMfUBmknn&X-Amz-Signature=eec41cdf62a35d76571b11720d6679ec8438a19ffa69ed50443b4151d616a121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNTLNIL6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T131611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7vI0DOBzAleteDGbC5E5c8iQnnrLAEznY1N6rA6jpugIhAKEEFfKl5TSLPpwwmJmOCQUeuOCg4IeO%2BvNYm353q%2ByzKv8DCFsQABoMNjM3NDIzMTgzODA1IgxTCs9dGG5oM%2FTlJ7wq3APcm9brsq3DQUNh%2FxC3BbkBNsNw6U35%2FEXn0bK8KNPkhMzsVVbsAqc9oM3SAKTh9o6KYw6OE7iNvUxAU76EbpCXqPV8yKsUCcozx9%2Bu2gbJltoDxb99mZSegB19Ie%2BXnC93iv6NhncQxhl2JxZGdnNcdSUElGviLZP7khFxzoQHkWP5pN9BaS3tpXLBibFkdeMeRsoLA0dSxS2zSUMdm03nQeBy5bz6LPYUioUpRQZ9cJt%2FrVMEV0ywNLFiIKHYfi3GPuRofZcZQ8ZNfJvhk43XQ8IqgQ9QHqr7DTBjTVXPxCi7o70Xiib4F15yhBs7r%2F7Lyxr3JNpFr7HsBKTrsIRTNCucnrsh4sJyZuQPLhDznCeHeSgIwmNfO43xa050yGD%2BusmK0rCERB4sDzN6WoL%2FTxxwqbHyHB8C5RaelGiFZErsevZ%2B5ghUGB2IAC%2FBSSKs7mAuAOIxEIfatcF3liYX345FKaqhpWKJckc7JG4qQq0UUjhzECmx33sp1HzeCQ1oqBGPoSgXuuBTf8QjNVW0Y7uFNLcXRg1QvMsDBoBaRk9wKlfxkylA0YPtc6LbSNnmhQbYjheEEuThlAJ60hq4I8v2272OYC%2B5uQvWegi2MSCe9MqBtc4gORdmMTC0y8rJBjqkAUfpY9tbjP4yqT6pJbsqiM6og0RXBzNq%2B4DAx3%2FbqY0D5Mk0dxRuINKVsZk0HBVVDkxdMNU%2FYb9kIrnPz%2BY0Y9fHEyH2zOdS7Xa8pbqAOlm3K9kRPaixqwlPg3SGNGuadfRcY3NPDV%2BUp%2B6w4TadDrLqytlfyxUqyahaLR1irAUzDa8JHE8g34uX9wFIKsn68dZtj%2B4eDNqSY4wgPiTlMfUBmknn&X-Amz-Signature=a42ffa0041f66e6e3936cf05cd32b9eae1590c9ccc6071e0ace5220aca104b7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

