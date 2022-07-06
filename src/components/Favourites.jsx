/** @format */
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFav } from "../redux/actions";

/* const mapDispatchToProps = (dispatch) => ({
  removeFromFav: (f) => {
    dispatch(removeFromFav(f));
  },
}); */

const Favourites = () => {
  const favourites = useSelector((state) => state.favouritesReducer.favourites);

  const dispatch = useDispatch();
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <ListGroup>
            {favourites &&
              favourites.map((f, i) => (
                <ListGroupItem key={i}>
                  <StarFill onClick={() => dispatch(removeFromFav(f))} />
                  <span>{f}</span>
                </ListGroupItem>
              ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
