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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VR74JEV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T095518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDojhlLvHDxqLJLoy77K1Ji3oHTL8MA%2BctBGwauT55vVAiEAkdTwt0pc81oFkCCVQHIOV2Y2f8f8PwqnJMl7VvIy9Qcq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOyeo%2BFGC14seszWRSrcA%2FL%2BLjlJsEETvJ%2Bp%2F40W2LW6R1BB6kCVrLivTedymaSH4jbJ9H3D%2FQRyBBnWooOIKZkWlt5b4k9GONsCOtVLDF9YeadYYGIwcJb2y43IV%2BivY5Chgz5ijpH5zAAikWhpfvTXdSWhH2ttggO4tw%2BuALHl7FUKskjnLj2r5eq63aWMRHav302IhMQUiPmUZQTS%2Bvb4IPYREWqsOmffutelnJpw4IvAuEnzE8PUggs%2FXNXggS%2BTFfI8bsktLpaUOVLeL895cKtxdUw%2FCywK4JTasD4wdSMmHpZjLc4Lrh9UH6CY8iHvpnmkvn4U5p5LJt0lK7hSEaO%2BE47vhTBc8DNUsKL7YnJ9uNHj0mN%2BEdQYH7p%2FXoSIU1gus1Hgpqs2VwrC9rwRQoQ8oJwaFiYs56Zn9NHRDEoEJf2Bt8mvMDivtZzt%2FWVOnCO%2FLBFxl2IEt2MBNg3TrYR5BjkNFPlkQcCDJUCTVzAeqg6lLuQMvE25xCcui1mOZ2rI%2B6siDPaWcBizNUnwB8TJ1DzKuhzloKkcePDmfIMFMhqDs58vtUzjuzSSmsxmc%2FeAi5oyhUMfkpBPlcV9i%2BC8RHxoQR62Kq0DDX0YAMwpt8S2qzhdA4%2BkTpPVIc4JgBx62I08216nMNv2v8kGOqUBly17gxjLUmj2b37jJRkT%2BhdYMQg3Igd6Tio2Rv%2Fl8Ef%2F0rJZ75KVqtiJyU6Dn1Po5SYNk70nFxDr4xYW6r21ASpVeZEyGj0HaL1PaTs94qR%2F1yDUV9uZQw1bRp%2FVrVwiQwGXpvsZ8rz5ZC3lN0i59G1a20Xl2V6m1Pz%2FR6Fkf6VpnPm2Re6022M1w6hDoNVV5A2XuPeR12KfeiYmH1w07e7vPLsY&X-Amz-Signature=04f67d4f29562435d4527e60ef661d665b6db6a3a7138a5aec4f6f45a857d3a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VR74JEV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T095518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDojhlLvHDxqLJLoy77K1Ji3oHTL8MA%2BctBGwauT55vVAiEAkdTwt0pc81oFkCCVQHIOV2Y2f8f8PwqnJMl7VvIy9Qcq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOyeo%2BFGC14seszWRSrcA%2FL%2BLjlJsEETvJ%2Bp%2F40W2LW6R1BB6kCVrLivTedymaSH4jbJ9H3D%2FQRyBBnWooOIKZkWlt5b4k9GONsCOtVLDF9YeadYYGIwcJb2y43IV%2BivY5Chgz5ijpH5zAAikWhpfvTXdSWhH2ttggO4tw%2BuALHl7FUKskjnLj2r5eq63aWMRHav302IhMQUiPmUZQTS%2Bvb4IPYREWqsOmffutelnJpw4IvAuEnzE8PUggs%2FXNXggS%2BTFfI8bsktLpaUOVLeL895cKtxdUw%2FCywK4JTasD4wdSMmHpZjLc4Lrh9UH6CY8iHvpnmkvn4U5p5LJt0lK7hSEaO%2BE47vhTBc8DNUsKL7YnJ9uNHj0mN%2BEdQYH7p%2FXoSIU1gus1Hgpqs2VwrC9rwRQoQ8oJwaFiYs56Zn9NHRDEoEJf2Bt8mvMDivtZzt%2FWVOnCO%2FLBFxl2IEt2MBNg3TrYR5BjkNFPlkQcCDJUCTVzAeqg6lLuQMvE25xCcui1mOZ2rI%2B6siDPaWcBizNUnwB8TJ1DzKuhzloKkcePDmfIMFMhqDs58vtUzjuzSSmsxmc%2FeAi5oyhUMfkpBPlcV9i%2BC8RHxoQR62Kq0DDX0YAMwpt8S2qzhdA4%2BkTpPVIc4JgBx62I08216nMNv2v8kGOqUBly17gxjLUmj2b37jJRkT%2BhdYMQg3Igd6Tio2Rv%2Fl8Ef%2F0rJZ75KVqtiJyU6Dn1Po5SYNk70nFxDr4xYW6r21ASpVeZEyGj0HaL1PaTs94qR%2F1yDUV9uZQw1bRp%2FVrVwiQwGXpvsZ8rz5ZC3lN0i59G1a20Xl2V6m1Pz%2FR6Fkf6VpnPm2Re6022M1w6hDoNVV5A2XuPeR12KfeiYmH1w07e7vPLsY&X-Amz-Signature=127b6fbda5e0794f82c5b23b10791165472c5c268be3942248915307cd1f782d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

