---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XZJOS6V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T130347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFePEMuWRt7GInMnThMHKdEZQDhP%2Bb2yQNg8SEkMsYqmAiEA4OjYaVvwDpYnE1HVPJ7l0g0fvyKMuUYmFDve6C7eLOMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOX6k%2BQmQMDR3tbYPCrcA2%2FeL0s5WkEVqu4MdYnsZ4qI7%2Fy33u2fIb7M8tWK3Cq3aieUazXzwj9M2Tdcig7EUtWWP9wy9IK2Y0Rn5LHbkwyiQOq%2Bo04SG2VvkT9jOh3AMnM3x0wIGVU7olRdDWk%2FZlEDOEPzfZ3waNnVRjgHaWW55RJPPtrrh20Ejf3d5uXQNwdxNYQXcJ1cTy5RfzminxxO4eFIHckttCkIZ7dTKIeRSuOp%2FGp6SalCum5tTu%2Ba0t75A8RAp2HIWpOzf%2BxPxdwAJI3NEiE3UO%2BEMUpiRMUVCJvnLEL1Ge6PkjdST8sN0p5hRkPJwBGKgizYL%2Fax4o90c47XBy%2B%2Fb9susOc1g2hkIgaaRU02iTBV5hDKpRjJy6AJvpeRcOHJd4266mFfBkep7UIlpM4A99yicGl%2FZGMMaVoFAuJc0OyJkzPfjrNvUQFscQaHrmyh3%2Fvngem89QIn3j0O0uDYvoLGMCCxMlsR3Sk9HaNpYaTU9KbvQY6ZHUiM3xLZtgKwCWqLbwa9LKnY7chCIQ%2BhjZCTB3Q5se9hk6TguMD6nbjrpVGxkz563%2FA4Dn%2Fzif12PoXxIvRQxl22Y8f1zAOzTprWKykiKTWdcBS5N%2BO%2Ful%2Fr%2FF2mAc4dHfOOd2dZprqoPcLAMMea1ckGOqUBY9knaFlRjCV4s4Lt9gleq1bRaxGSudn9fy5LLblsUVot%2F4iMoDzZCi5%2BkMZxIOY6gTvydNCOppj5UmEimIvTcngden7xcSWpJ6zAp3JsldOIdtM5UCuY8qUoELUaKdmDaln3zn%2FRheRLqQKBu90o6gQWVZeZEuFpLyEPX0csSKEkildx796PCfy4UR3TZApvvl2pj%2B4Uz2Y2axpiwYNTxr9HVGSI&X-Amz-Signature=16313153f1646a0cfd970a831000a6988d023487fb27958f0a241c31a0dd21b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XZJOS6V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T130347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFePEMuWRt7GInMnThMHKdEZQDhP%2Bb2yQNg8SEkMsYqmAiEA4OjYaVvwDpYnE1HVPJ7l0g0fvyKMuUYmFDve6C7eLOMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOX6k%2BQmQMDR3tbYPCrcA2%2FeL0s5WkEVqu4MdYnsZ4qI7%2Fy33u2fIb7M8tWK3Cq3aieUazXzwj9M2Tdcig7EUtWWP9wy9IK2Y0Rn5LHbkwyiQOq%2Bo04SG2VvkT9jOh3AMnM3x0wIGVU7olRdDWk%2FZlEDOEPzfZ3waNnVRjgHaWW55RJPPtrrh20Ejf3d5uXQNwdxNYQXcJ1cTy5RfzminxxO4eFIHckttCkIZ7dTKIeRSuOp%2FGp6SalCum5tTu%2Ba0t75A8RAp2HIWpOzf%2BxPxdwAJI3NEiE3UO%2BEMUpiRMUVCJvnLEL1Ge6PkjdST8sN0p5hRkPJwBGKgizYL%2Fax4o90c47XBy%2B%2Fb9susOc1g2hkIgaaRU02iTBV5hDKpRjJy6AJvpeRcOHJd4266mFfBkep7UIlpM4A99yicGl%2FZGMMaVoFAuJc0OyJkzPfjrNvUQFscQaHrmyh3%2Fvngem89QIn3j0O0uDYvoLGMCCxMlsR3Sk9HaNpYaTU9KbvQY6ZHUiM3xLZtgKwCWqLbwa9LKnY7chCIQ%2BhjZCTB3Q5se9hk6TguMD6nbjrpVGxkz563%2FA4Dn%2Fzif12PoXxIvRQxl22Y8f1zAOzTprWKykiKTWdcBS5N%2BO%2Ful%2Fr%2FF2mAc4dHfOOd2dZprqoPcLAMMea1ckGOqUBY9knaFlRjCV4s4Lt9gleq1bRaxGSudn9fy5LLblsUVot%2F4iMoDzZCi5%2BkMZxIOY6gTvydNCOppj5UmEimIvTcngden7xcSWpJ6zAp3JsldOIdtM5UCuY8qUoELUaKdmDaln3zn%2FRheRLqQKBu90o6gQWVZeZEuFpLyEPX0csSKEkildx796PCfy4UR3TZApvvl2pj%2B4Uz2Y2axpiwYNTxr9HVGSI&X-Amz-Signature=b9477cc2f6a59399cf5e3d0eedd1105a572775b6b3d70dde19a4df227f625ade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

