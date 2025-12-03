---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRFH5RH2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T060347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCkvAcdI6BlIAw9swDo1%2B9AVm8iOkeLCqaBFmohrZO%2B9QIgcHs%2Fw6Li0MulWqYq8CZrxRCqK%2FEbfxOQ9pFaYTasTBMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDJmxJU7AsIBj6m7ogSrcA1PnFsYYyXSF6JUmj8jDXleCmSK75ocV%2Fs55nqppFKFuGT7IIqvCMVfkoNhWSdRnnHYwmXloYmK5qh1SB4Lj9PgjwBfM1vxJ1%2FB8YQcN7yPbYmuSQiTNhGgvZ%2FS2dIXX1o66SDhdNMmz2vLALJijdlL5lJDKr5AEFOrcmOMj%2B8Mcb7g5U59ctivcHoBBmAu8PmqH2uT77C7W37uiTmSNMsSkULK0r3ikmY0q5drGYb7KU8z7RE3pvNlVFJcv5J%2F1mrR0G79cyxZMsYstV8z7tUzdHNzyU9XCDbRAqsatcwzgQxRsck8p1JiQTOmCRqjHJgQC%2FDr1esdgIaZ5KBl%2B7aoDcoefjc4Yzc45l5KCRlRLMCxZuD5%2FgeMhkc032Qs5YBcKXkh2MlK%2BtN35y9i3pJrTwSFQT20G4qNrEelofAqZSSBCx892EYJtBFqBwh1wGJNrc4zirKtID5nRxAzQz7tgcdrzqYRZtZFsJLDdes%2B4XgpwC2%2BzJjtQtrfPninSVIOb4%2BS69dz%2BUy1MwPe%2F%2FRl9PRpxOt5FbDzZYT6aGHqw8sAi3PC%2FB1E3Q8f31PK8m3z0Ztb8eypn%2FgsfQ71u1OeZUz9BwvEImCkMe5YJCNA4u%2FBxVomCUI1uu3MaMJibv8kGOqUBQEQ%2BCap0uzihsqSVMwZjOQZ90u4%2B5tL3yNPpi01rj8tQ6dkEjh%2BoGic6EqztbNLQR6thQ4yIDf4GI2xcA4qiR3KjX%2BUFX3UZwvfZT2VUCh6jnstQB2qbLiCzvVwFrrHIdbzhSmTH1cq3MIfIZOfi674v%2BYjtRGScPb0l7ZI2VXTnhIxKOiFUKotANNQgodyQFJQojSNE9zjb8yND3VRx2Y%2FOACYJ&X-Amz-Signature=91fed59525078ffcdc64a889844cec46a9975b9ff3a7399e8492ac34af95811b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRFH5RH2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T060347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCkvAcdI6BlIAw9swDo1%2B9AVm8iOkeLCqaBFmohrZO%2B9QIgcHs%2Fw6Li0MulWqYq8CZrxRCqK%2FEbfxOQ9pFaYTasTBMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDJmxJU7AsIBj6m7ogSrcA1PnFsYYyXSF6JUmj8jDXleCmSK75ocV%2Fs55nqppFKFuGT7IIqvCMVfkoNhWSdRnnHYwmXloYmK5qh1SB4Lj9PgjwBfM1vxJ1%2FB8YQcN7yPbYmuSQiTNhGgvZ%2FS2dIXX1o66SDhdNMmz2vLALJijdlL5lJDKr5AEFOrcmOMj%2B8Mcb7g5U59ctivcHoBBmAu8PmqH2uT77C7W37uiTmSNMsSkULK0r3ikmY0q5drGYb7KU8z7RE3pvNlVFJcv5J%2F1mrR0G79cyxZMsYstV8z7tUzdHNzyU9XCDbRAqsatcwzgQxRsck8p1JiQTOmCRqjHJgQC%2FDr1esdgIaZ5KBl%2B7aoDcoefjc4Yzc45l5KCRlRLMCxZuD5%2FgeMhkc032Qs5YBcKXkh2MlK%2BtN35y9i3pJrTwSFQT20G4qNrEelofAqZSSBCx892EYJtBFqBwh1wGJNrc4zirKtID5nRxAzQz7tgcdrzqYRZtZFsJLDdes%2B4XgpwC2%2BzJjtQtrfPninSVIOb4%2BS69dz%2BUy1MwPe%2F%2FRl9PRpxOt5FbDzZYT6aGHqw8sAi3PC%2FB1E3Q8f31PK8m3z0Ztb8eypn%2FgsfQ71u1OeZUz9BwvEImCkMe5YJCNA4u%2FBxVomCUI1uu3MaMJibv8kGOqUBQEQ%2BCap0uzihsqSVMwZjOQZ90u4%2B5tL3yNPpi01rj8tQ6dkEjh%2BoGic6EqztbNLQR6thQ4yIDf4GI2xcA4qiR3KjX%2BUFX3UZwvfZT2VUCh6jnstQB2qbLiCzvVwFrrHIdbzhSmTH1cq3MIfIZOfi674v%2BYjtRGScPb0l7ZI2VXTnhIxKOiFUKotANNQgodyQFJQojSNE9zjb8yND3VRx2Y%2FOACYJ&X-Amz-Signature=ce6ad92284c6fddb407e06b8b3b3206c994daf989d6606808ceb225356b7f2bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

