import { api } from "@/http/api";
import { Position } from "@/models/Position";

class PositionsService {
  async getAll(): Promise<Position[]> {
    const res = await api.get("/positions");
    return res.data;
  }

  async create(position: Position): Promise<Position> {
    const res = await api.post("/positions", position);
    return res.data;
  }
}

const positionsService = new PositionsService();

export default positionsService;
