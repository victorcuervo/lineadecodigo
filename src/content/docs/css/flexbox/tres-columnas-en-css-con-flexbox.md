---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TOUVZND%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T092938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5hFsH%2BEMdEFVHDz%2F1lamr%2FoFlYKVgjTIMa7iMLcxicgIhAN5lVc8zMZ%2FMfyzai2ChxwiIp%2FoZYAvMFbjNHvsu3OFPKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUe04cU3EuVDnqos8q3ANiWOkSRkp51CZNFPHyQ2ioDIcoAPqsqZG6NDUuNPFwTZ8JuYK97F9%2FIT%2BWbaChy%2F6OiN8BT53lNLBhTmM%2BBCqluSe2LNFvBRiFpkcKYlyI3Y%2FIv%2FWaZiTuhoJE3%2Bbx9tahRXYcanH27E8QchtHt4%2F3eVrjLh3L5V2EKwwDUagiE54n%2F%2FsYwGsl4W5E7ylRSgKsalU9lYKPMwKXrOH%2BYtQ8RkxRjP4yPGx4oT%2BIf3XymqoNa7%2BH4J1Qu%2FLM%2BzPL%2FmbKDDfJGHGy4nJWFJcfvWKEN4dzQYu1M9db2jyrAlWUcOlqZ6%2FwFFTzBsDyp9JnezS38JHsGHh6kF%2Fcwgvqveskpv4pZZ11FeKWeQKCIgbQ3jEdToweX38mLa16JkapZl8%2Fx2lT6wqlkfMz1sviuhX4wGaZmRX%2BS0URmax%2Bpu69I1Z3tn935VeyeX6KbH%2FMSzujJCEutlOZMN6%2B6fdxJJtg1sCRNacRsIvDNwLCdAbHEaMOIeyJlgAa4QjedMcBky%2Bo4lLhYes46xt%2BDoKku87ugflkZE%2B0qzBS16C0HnBZmqJp96LXiExZ9CEcl%2FvR2tap2YFmhu87qCfaQacF7W50%2Bn5sxnK552%2BzFK4fKBknHiIdh9C90Ee8ELuE3DC%2FxN%2FJBjqkAUMeD6ukXvGer4o6pIPSgE8xTn5SyzL7pBvpeeAvCSZbYwJ8ePzmEl2pP4Hk5usw%2FseAG%2B1yHV1gZ%2Byr7cK%2BHqS4%2FjmjlsqxqKu1BKOtoDf%2Fme1%2FtwpWe20DlVA6C1W1Ax9mYRuImPulThsLWlz8cqxoqc1MVZeFHH4Ef%2Fk3QmR6J1hpiejGOZ%2F2tcZjfjAAHw5UJnUH2Z7ULycMn2jmYmsPlAsT&X-Amz-Signature=f04c9228b409d651990d8263b089867eb48b40120e38e5ac7e1d40373cb9fa8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TOUVZND%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T092938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5hFsH%2BEMdEFVHDz%2F1lamr%2FoFlYKVgjTIMa7iMLcxicgIhAN5lVc8zMZ%2FMfyzai2ChxwiIp%2FoZYAvMFbjNHvsu3OFPKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUe04cU3EuVDnqos8q3ANiWOkSRkp51CZNFPHyQ2ioDIcoAPqsqZG6NDUuNPFwTZ8JuYK97F9%2FIT%2BWbaChy%2F6OiN8BT53lNLBhTmM%2BBCqluSe2LNFvBRiFpkcKYlyI3Y%2FIv%2FWaZiTuhoJE3%2Bbx9tahRXYcanH27E8QchtHt4%2F3eVrjLh3L5V2EKwwDUagiE54n%2F%2FsYwGsl4W5E7ylRSgKsalU9lYKPMwKXrOH%2BYtQ8RkxRjP4yPGx4oT%2BIf3XymqoNa7%2BH4J1Qu%2FLM%2BzPL%2FmbKDDfJGHGy4nJWFJcfvWKEN4dzQYu1M9db2jyrAlWUcOlqZ6%2FwFFTzBsDyp9JnezS38JHsGHh6kF%2Fcwgvqveskpv4pZZ11FeKWeQKCIgbQ3jEdToweX38mLa16JkapZl8%2Fx2lT6wqlkfMz1sviuhX4wGaZmRX%2BS0URmax%2Bpu69I1Z3tn935VeyeX6KbH%2FMSzujJCEutlOZMN6%2B6fdxJJtg1sCRNacRsIvDNwLCdAbHEaMOIeyJlgAa4QjedMcBky%2Bo4lLhYes46xt%2BDoKku87ugflkZE%2B0qzBS16C0HnBZmqJp96LXiExZ9CEcl%2FvR2tap2YFmhu87qCfaQacF7W50%2Bn5sxnK552%2BzFK4fKBknHiIdh9C90Ee8ELuE3DC%2FxN%2FJBjqkAUMeD6ukXvGer4o6pIPSgE8xTn5SyzL7pBvpeeAvCSZbYwJ8ePzmEl2pP4Hk5usw%2FseAG%2B1yHV1gZ%2Byr7cK%2BHqS4%2FjmjlsqxqKu1BKOtoDf%2Fme1%2FtwpWe20DlVA6C1W1Ax9mYRuImPulThsLWlz8cqxoqc1MVZeFHH4Ef%2Fk3QmR6J1hpiejGOZ%2F2tcZjfjAAHw5UJnUH2Z7ULycMn2jmYmsPlAsT&X-Amz-Signature=70b6985fcff957de88b0dbf6571f79dfc2325dfcccd054966321322f0fefae4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

