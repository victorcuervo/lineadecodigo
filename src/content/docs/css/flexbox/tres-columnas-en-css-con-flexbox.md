---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NDG64FP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T120549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgmGA%2BTGybj%2FgtBOmEcG%2FnyQz2UU5V8ZbNP6U4cSm1sAIgKHqRr7f2V7tVs6iBH2FhinhY8SVEHESeknweF3E3zMQqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJN4jBsnpyKuSdTRNircAxi34eonOtzGKDgcOehPhL1ZBhtdroynTJt8b6qPt252lm%2BlqfkCMGzpIw2gq8P8SmjOP6uYIXEnCP1hupDLm%2BAo3KxbCnDGNaISeOAEd8QUm0qj1XQSJCRd2YV602v0iF986jwl2KuDC77mdybvrdvpNkm7ArH6WCO2kFNsPt624YkkV7ou19EtBzZPFLF8m%2BVWGqpPZOpnanBnNAgGSDQh0Zg76Q5MedQP%2B%2BPNglG3UwqLLrc3sN2LTKAy%2BCiqPEz5VQH93%2Brs7dOFZ%2FC3SDZYy11iJds65mb%2FwR%2FPa2HD0eAwlskIwBEqGc3%2BxWegOrcqwub5XtOHs93HShxEcvzAhipiqA7mJwQd3wRSRY8qDVKp3dMixw5Px%2BkmcxnfaYkgUJth20MV2TKtA%2FhzU2O%2BVVbgz9NUa26tyt%2BbAjYCR0wwoGC8vVSnEpER1GUzLKT42Dfxvr75dz1Rc1yQ6oHVruH1nW6CWexyVWwvkBRU3hCIr%2BRxpfwTS%2BBItgrW4iwC97dmgU0PZ91Y47p9zs3IJfYcpBNtV5e7KYf9AUyIe8FTp1WhlxGf1Idii%2FMm4c70GY4pRcwv9Yu%2F8VKl7udS%2BXKNpPvIrCv1fxc5grXHshNitK1U5YFTY%2B8VMP%2Fy2skGOqUBNj2iDkSXxmXtXXCl7apMYo2SsxGdf%2BDTz3Gxu2WX12y4zEoyl8W3VZq3MLZLXV%2FWWssPyWs%2BKEDhj1YOO5VK%2BffW0Xov97XdetlQOdswV0jGTjJ0wiaKTeSyvhEQbmVHbV1%2FiM7ePZiE%2FDmLH79EKDR6IUcFtE14RSWVdnumV2PAaGS%2BU35bJopP66OoduSG0bLtVA6nPYPnTuw869DAjFuTCWlE&X-Amz-Signature=2dd8152e2a566c7417a29b7ec45c57eaec7fd20cf0ff026964b446bb00a9d43c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NDG64FP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T120549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgmGA%2BTGybj%2FgtBOmEcG%2FnyQz2UU5V8ZbNP6U4cSm1sAIgKHqRr7f2V7tVs6iBH2FhinhY8SVEHESeknweF3E3zMQqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJN4jBsnpyKuSdTRNircAxi34eonOtzGKDgcOehPhL1ZBhtdroynTJt8b6qPt252lm%2BlqfkCMGzpIw2gq8P8SmjOP6uYIXEnCP1hupDLm%2BAo3KxbCnDGNaISeOAEd8QUm0qj1XQSJCRd2YV602v0iF986jwl2KuDC77mdybvrdvpNkm7ArH6WCO2kFNsPt624YkkV7ou19EtBzZPFLF8m%2BVWGqpPZOpnanBnNAgGSDQh0Zg76Q5MedQP%2B%2BPNglG3UwqLLrc3sN2LTKAy%2BCiqPEz5VQH93%2Brs7dOFZ%2FC3SDZYy11iJds65mb%2FwR%2FPa2HD0eAwlskIwBEqGc3%2BxWegOrcqwub5XtOHs93HShxEcvzAhipiqA7mJwQd3wRSRY8qDVKp3dMixw5Px%2BkmcxnfaYkgUJth20MV2TKtA%2FhzU2O%2BVVbgz9NUa26tyt%2BbAjYCR0wwoGC8vVSnEpER1GUzLKT42Dfxvr75dz1Rc1yQ6oHVruH1nW6CWexyVWwvkBRU3hCIr%2BRxpfwTS%2BBItgrW4iwC97dmgU0PZ91Y47p9zs3IJfYcpBNtV5e7KYf9AUyIe8FTp1WhlxGf1Idii%2FMm4c70GY4pRcwv9Yu%2F8VKl7udS%2BXKNpPvIrCv1fxc5grXHshNitK1U5YFTY%2B8VMP%2Fy2skGOqUBNj2iDkSXxmXtXXCl7apMYo2SsxGdf%2BDTz3Gxu2WX12y4zEoyl8W3VZq3MLZLXV%2FWWssPyWs%2BKEDhj1YOO5VK%2BffW0Xov97XdetlQOdswV0jGTjJ0wiaKTeSyvhEQbmVHbV1%2FiM7ePZiE%2FDmLH79EKDR6IUcFtE14RSWVdnumV2PAaGS%2BU35bJopP66OoduSG0bLtVA6nPYPnTuw869DAjFuTCWlE&X-Amz-Signature=602d5b966f07f358b14baa81b936c7eef7fc94039160f9a477f6006729c6b532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

