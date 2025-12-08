---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q33TIMA6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTWfLZDyyqIRONk1rR5VLoXUnNVJc%2FBZDfqPoPhu2kTwIhAOMiaz6MOmp2aGhMIOTJ9t6BY5nguqgPJmhXyRkdlCmuKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9vdlR4lOcg62AHXcq3AO%2Brdt66IlC0akLbmABF58577d%2F%2BfOxJgtQ6tn%2BbpegZi85QnN8wCjaWPBJTNp%2BHmMC3CF6Ho42sTxWXhvDo7YEHjeBYiEdsUAQvcXkw0Hu%2BcxSMSfzuHVjVgG1CLAqsziGWr2pdi5Fe6TWE0sZL%2Fbyp4j3MIdisY1OtWmqJuxZTaMP1j2E3MjdniRJYbei4FaWNhwQ38QFG662DiJeD%2FozQ0iDgOG7Nfid%2BpknaOj8NTmVEIlftieCWtSRIz9c%2FP7WOzWOpCjXTz7oEU5ukPHBKhu%2BrDGkK5R%2BRPPgm5RRP5nNQwDpVOPiQmGH16UYPuG7ItFLDaplSxWWE4nRHaabH2rV7q5x83%2BFxYge0pL%2B1sM51HWeCKEFA%2FNANVx1xcj1Yt3Tyb1wD6nPRp5KQuVZy0p2WXc%2FbPzOro%2BPNG%2Bnm3S%2FvrSOQQTBJP%2FVW%2B2sQjhFQE%2FuhOpZf2Z8ij4oN7MKBnB2m%2Fpeg5LUoigEWPZNAgK%2FcevIKX2%2FX5kNLgRl8CwAqiSvWDa2yyPEdtxGUEgJg5UX7n89OlN7G6UTXlmZ7xgNLrJVfknbmNJEzqpcPP8id5OJqC5pHnBxk91MWg9FhUNU%2BgZ7eW0TgXHpODh6YGEQnrqdCLCIxoD8TjCg7tjJBjqkAc8kqIHbCFuMNa184Wf00OoGI%2FOgXxgy1istUdD6USmUPxh0rdWf09bt2q4iIlTFpodkwneORVfvbZJi1dKehyN8KMXgNJVBYG4aNxtraEJ1%2Fv%2B9lIDFWpEqw7LcCXQOO6NNbFTk6ZGK%2BneMlw6wM7dWCGdwpJ0u%2BbfRtfNB5l9fTbGrAB78l%2FtrL583aGhF%2FeFquYQAN%2FvCM2hbw5IwsBSE%2BwDM&X-Amz-Signature=92b1b95aeb24ba475bb26dd030d2e4c23db8ae1d65dcd900b80531d0634597e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q33TIMA6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTWfLZDyyqIRONk1rR5VLoXUnNVJc%2FBZDfqPoPhu2kTwIhAOMiaz6MOmp2aGhMIOTJ9t6BY5nguqgPJmhXyRkdlCmuKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9vdlR4lOcg62AHXcq3AO%2Brdt66IlC0akLbmABF58577d%2F%2BfOxJgtQ6tn%2BbpegZi85QnN8wCjaWPBJTNp%2BHmMC3CF6Ho42sTxWXhvDo7YEHjeBYiEdsUAQvcXkw0Hu%2BcxSMSfzuHVjVgG1CLAqsziGWr2pdi5Fe6TWE0sZL%2Fbyp4j3MIdisY1OtWmqJuxZTaMP1j2E3MjdniRJYbei4FaWNhwQ38QFG662DiJeD%2FozQ0iDgOG7Nfid%2BpknaOj8NTmVEIlftieCWtSRIz9c%2FP7WOzWOpCjXTz7oEU5ukPHBKhu%2BrDGkK5R%2BRPPgm5RRP5nNQwDpVOPiQmGH16UYPuG7ItFLDaplSxWWE4nRHaabH2rV7q5x83%2BFxYge0pL%2B1sM51HWeCKEFA%2FNANVx1xcj1Yt3Tyb1wD6nPRp5KQuVZy0p2WXc%2FbPzOro%2BPNG%2Bnm3S%2FvrSOQQTBJP%2FVW%2B2sQjhFQE%2FuhOpZf2Z8ij4oN7MKBnB2m%2Fpeg5LUoigEWPZNAgK%2FcevIKX2%2FX5kNLgRl8CwAqiSvWDa2yyPEdtxGUEgJg5UX7n89OlN7G6UTXlmZ7xgNLrJVfknbmNJEzqpcPP8id5OJqC5pHnBxk91MWg9FhUNU%2BgZ7eW0TgXHpODh6YGEQnrqdCLCIxoD8TjCg7tjJBjqkAc8kqIHbCFuMNa184Wf00OoGI%2FOgXxgy1istUdD6USmUPxh0rdWf09bt2q4iIlTFpodkwneORVfvbZJi1dKehyN8KMXgNJVBYG4aNxtraEJ1%2Fv%2B9lIDFWpEqw7LcCXQOO6NNbFTk6ZGK%2BneMlw6wM7dWCGdwpJ0u%2BbfRtfNB5l9fTbGrAB78l%2FtrL583aGhF%2FeFquYQAN%2FvCM2hbw5IwsBSE%2BwDM&X-Amz-Signature=2a44678bbaa234876c1eb1eac641f005c1a001ee6f9a9baced7cc2e8c329422f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

